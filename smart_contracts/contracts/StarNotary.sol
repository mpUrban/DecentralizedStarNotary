
//solium-disable linebreak-style
pragma solidity ^0.4.23;

// import references OZ install path above, contract compiles despite import error in IDE
import "openzeppelin-solidity/contracts/token/ERC721/ERC721.sol"; 


contract StarNotary is ERC721 { 

    struct Star { 
        string name;
        string ra;
        string dec;
        string mag;
        string story;
    }

    mapping(uint256 => Star) public tokenIdToStarInfo; 
    mapping(uint256 => uint256) public starsForSale;

    // starsMap for uniqueness checking
    mapping(string => uint256) internal starsMap;

    // concatenation of strings for low gas consumption:
    // https://ethereum.stackexchange.com/questions/729/how-to-concatenate-strings-in-solidity
    // best to do this work off-chain in front-end client
    function append3(string _a, string _b, string _c) internal pure returns (string) {
        return string(abi.encodePacked(_a, _b, _c));
    }

    // this method of uniqueness checking will fail if rules to control rounding aren't implemented
    // eg: if magnitude is 200 and a user inputs 199.99999
    function createStarStats(string _ra, string _dec, string _mag) internal pure returns (string){
        return append3(_ra, _dec, _mag);
    }

    modifier uniqueStar(string _ra, string _dec, string _mag) {
        string memory starStats = createStarStats(_ra, _dec, _mag);
        require(starsMap[starStats] == 0, "Star already registered");
        _;
    }

    function createStar(string _name, string _ra, string _dec, string _mag, string _story, uint256 _tokenId) public uniqueStar(_ra, _dec, _mag) {
        
        Star memory newStar = Star(_name, _ra, _dec, _mag, _story);
        string memory starStats = createStarStats(_ra, _dec, _mag);

        tokenIdToStarInfo[_tokenId] = newStar;
        starsMap[starStats] = _tokenId;

        _mint(msg.sender, _tokenId);
    }

    function putStarUpForSale(uint256 _tokenId, uint256 _price) public { 
        require(this.ownerOf(_tokenId) == msg.sender, "Must be owner to sell star");

        starsForSale[_tokenId] = _price;
    }

    function buyStar(uint256 _tokenId) public payable { 
        require(starsForSale[_tokenId] > 0, "Star not for sale");
        
        uint256 starCost = starsForSale[_tokenId];
        address starOwner = this.ownerOf(_tokenId);
        require(msg.value >= starCost, "Inadequate funds");

        _removeTokenFrom(starOwner, _tokenId);
        _addTokenTo(msg.sender, _tokenId);
        
        starOwner.transfer(starCost);

        if(msg.value > starCost) { 
            msg.sender.transfer(msg.value - starCost);
        }
    }

    function checkIfStarExist(string _ra, string _dec, string _mag) public view returns (bool) {
        string memory starStats = createStarStats(_ra, _dec, _mag);
        return starsMap[starStats] > 0;
    }
}