const StarNotary = artifacts.require('StarNotary')

contract('StarNotary', accounts => { 

    name = 'Star power 103!'
    ra = 'ra_032.155'
    dec = 'dec_121.874'
    mag = 'mag_245.978'
    story = 'I love my wonderful star'
    tokenId = 1
        
    beforeEach(async function() { 
        this.contract = await StarNotary.new({from: accounts[0]})
    })
    
    describe('can create a star', () => { 
        it('can create a star and get its name', async function () { 
            
            await this.contract.createStar(name, ra, dec, mag, story, 1, {from: accounts[0]})
            
            assert.equal((await this.contract.tokenIdToStarInfo(1))[0], name)
        })
    })

    describe('buying and selling stars', () => { 
        let user1 = accounts[1]
        let user2 = accounts[2]
        let randomMaliciousUser = accounts[3]
        
        let starId = 1
        let starPrice = web3.toWei(.01, "ether")

        beforeEach(async function () { 
            await this.contract.createStar(name, ra, dec, mag, story, starId, {from: user1}) 
        })

        it('user1 can put up their star for sale', async function () { 
            assert.equal(await this.contract.ownerOf(starId), user1)
            await this.contract.putStarUpForSale(starId, starPrice, {from: user1})
            
            assert.equal(await this.contract.starsForSale(starId), starPrice)
        })

        describe('user2 can buy a star that was put up for sale', () => { 
            beforeEach(async function () { 
                await this.contract.putStarUpForSale(starId, starPrice, {from: user1})
            })

            it('user2 is the owner of the star after they buy it', async function() { 
                await this.contract.buyStar(starId, {from: user2, value: starPrice, gasPrice: 0})
                
                assert.equal(await this.contract.ownerOf(starId), user2)
            })

            it('user2 ether balance changed correctly', async function () { 
                let overpaidAmount = web3.toWei(.05, 'ether')
                const balanceBeforeTransaction = web3.eth.getBalance(user2)
                await this.contract.buyStar(starId, {from: user2, value: overpaidAmount, gasPrice: 0})
                const balanceAfterTransaction = web3.eth.getBalance(user2)

                assert.equal(balanceBeforeTransaction.sub(balanceAfterTransaction), starPrice)
            })
        })
    })

    describe('star duplication not possible', () => { 
        it('impossible to own same star based on stats', async function () { 
            star1 = await this.contract.createStar(name, ra, dec, mag, story, 1, {from: accounts[0]})
            
            //console.log('star 1 generated');
            //console.log(star1);
            try {
                starDupe = await this.contract.createStar(name, ra, dec, mag, story, 2, {from: accounts[0]})
            } catch(err) {
                //console.log('duplication error generated as expected')
                assert.exists(err);
            }
         })
    })

    describe('verify checkIfStarExist()', () => {
        it('star exists return for existing', async function(){
            await this.contract.createStar(name, ra, dec, mag, story, 1, {from: accounts[0]})
            assert.isTrue((await this.contract.checkIfStarExist(ra, dec, mag) > 0))
        })
    })
})