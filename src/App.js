import React, { useState, useEffect, useRef } from 'react';
import Container from '@material-ui/core/Container';
import Modal from '@material-ui/core/Modal';
import Web3EthContract from 'web3-eth-contract';
import './App.css';
import Web3 from 'web3';
window.ethereum.enable();

const PROVIDER_URL = 'wss://rinkeby.infura.io/ws/v3/3f30c3d9a4794b6bac600ac401675dc8';
const web3 = new Web3(Web3.givenProvider || PROVIDER_URL);
// const web3 = new Web3(PROVIDER_URL);

console.log('web3 util ', web3.utils )
Web3EthContract.setProvider(PROVIDER_URL);
const address = '0xeAf59aCF00435857d4D0e26E2b48948B86A8A8ca';
const abi = [
 {"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"maxPurchase","type":"uint256"},{"internalType":"uint256","name":"maxSupply_","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_NFT_PURCHASE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NFT_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"calcStartingIndex","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencySetStartingIndexBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"flipSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numberOfTokensMax5","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"reserveTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI_","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startingIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startingIndexBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}
];

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [supplyModalIsOpen, setSupplyModalIsOpen] = useState(false);
  const [account, setAccount] = useState();
  const [price, setPrice] = useState(50000000000000000);
  const [purchaseAmount, setPurchaseAmount] = useState(1);
  const homeRef = useRef(null);
  const teamRef = useRef(null);
  const aboutRef = useRef(null);
  const charityRef = useRef(null);
  const VIPRef = useRef(null);
  const contract = new Web3EthContract(abi, address);
  
  const homeScroll = () => homeRef.current.scrollIntoView();
  const teamScroll = () => teamRef.current.scrollIntoView();
  const aboutScroll = () => aboutRef.current.scrollIntoView();
  const charityScroll = () => charityRef.current.scrollIntoView();
  const VIPScroll = () => VIPRef.current.scrollIntoView();

  const handleCloseModal = () => { setModalIsOpen(false); }
  const handleSupplyCloseModal = () => { setSupplyModalIsOpen(false);}

  const validatePurchaseAmount = (e) => { 
    if(e < 6){
      setPurchaseAmount(e);
    }
  }
  // Testing out the contract call here
  useEffect(() => {
    const getPrices = async () => {
      let res = await contract.methods.NFT_PRICE().call({
        gas: '0x76c0', // 30400
        gasPrice: '0x9184e72a000', 
      });
      console.log('gas price: ', res)
      setPrice(res);
    }
    getPrices();
  }, []);

  const onMint = async () => {
    // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    // setAccount(accounts[0]);
    // console.log('account: ',accounts, account);
  }

  const onPurchase = async () => {
    let res = await contract.methods.mint(1).call({
      gas: 210000, // 30400
      from: '0x010bc28dE2E080E233cA98Bc2D03B22D5CA8eD41',
      value: price,
      gasLimit:210000,
      gasPrice: 210000,
    });
    console.log('whats res ', res);
  }

  return (
    <div className="App" ref={homeRef}>
      <Modal
        disableEnforceFocus
        open={modalIsOpen}
        onClose={handleCloseModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className='minting-bear-modal'
      >
        <img src={'./minting_bear.gif'} className='minting-bear-image' />
      </Modal>
      <Modal
        disableEnforceFocus
        open={supplyModalIsOpen}
        onClose={handleSupplyCloseModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className='minting-bear-modal supply'
      >
        <div className='supply-container'>
          <h1 className='blood-font'>How many bears do you want to mint?</h1>
          <input type='number' className='mint-input' value={purchaseAmount} onChange={(e) => validatePurchaseAmount(e.target.value)} />
          <button onClick={() => onPurchase()} className='mint-button'>Mint</button>
        </div>
      </Modal>
      <img className='top-drip' src={'./drip_top.png'}/>
      <img className='top-drip' src={'./drip_top.png'} style={{right: -10}} />
      <img className='top-splatter' src={'./splatter.png'} />
      <div className='banner'>
        <img src={'./bear_head.png'} width={100} height={100} />
        <h2  style={{marginTop: 0}} className='blood-font'> THE BEAR CLTV.</h2>
        <div className='links-bar'>
          <div className='header-link' onClick={()=> homeScroll }>Home</div>
          <div className='header-link' onClick={()=> aboutScroll() }>About</div>
          <div className='header-link' onClick={()=> charityScroll() }>Charity</div>
          <div className='header-link' onClick={()=> VIPScroll() }>VIP</div>
          <div className='header-link' onClick={() => teamScroll()}>Team</div>
        </div>
      </div>
        <div style={{marginTop: 125, marginLeft: '5%', marginRight: '5%'}}>
          <img src={'./red_bear.png'} className='first-bear-image-small' />
          {/* <div className='blood-font small-tbc' style={{fontSize: 40, marginTop: 100, marginBottom: 50}}>TBC</div> */}
          <div className='button-container'>
            <button onClick={() => onMint()} className='coming-soon-button'>SIGN ON.</button>
            <button onClick={() => setSupplyModalIsOpen(true)} className='coming-soon-button'>BUY THE THING.</button>
          </div>
          <h1 className='bear-header blood-font'> THE BEAR CLTV.</h1>
          <img src={'./red_bear.png'} className='first-bear-image' />
          {/* <img src={'./splatter_2.png'} className='splash_splatter' /> */}
          <div className='bear-header-copy'>Exclusive </div>
          <p className='bear-header-copy'>Collectable NFT's that offer hybrid access to the TBC Hype brand + Much more. </p>
        </div>
        <div>
          <div className='first-image-gallery'>
              <img src={'./bear_gallery11.png'} className='first-gallery' />
              <img src={'./bear_gallery12.png'} className='first-gallery' />
              <img src={'./bear_gallery13.png'} className='first-gallery' />
          </div>
        </div>
        <Container ref={aboutRef}>
          <h1 className='what-is blood-font'>What is TBC?</h1>
          <p className='center-paragraph'>
            TBC is a eco-friendly hybrid collective of art lovers emerged in the NFT space, collectors realm, & of fashion enthusiasts. The Bear CLTV. is a collection of 7,777 unique NFT's curated and carefully
            crafted programatically with hundreds of variations, personality traits, and accessories. Moreover, the Bear CLTV. will become a foundational clique within the blockchain itself. Though TBC is a NFT collectible project, TBC is bringing a diverse selection of utility.
          </p>
        </Container>
        <div>
          <h1 className='blood-font title' style={{marginTop: -40, marginBottom: 30}}>TBC NFT's</h1>
          <div className='four-square-container'>
            <div className='left-side-small-text-block'>
              <div className='quarter-text'>
                <h4 className='small-text-block-title' >Exclusivity</h4>
                <p  className='small-text-block'>The bear collective offers an exclusive 7,777 NFT collection that includes extreme rares's, special graphics, and other innovations not yet prominent in the NFT space.</p>
              </div>
              <div className='quarter-text'>
                <h4 className='small-text-block-title'>Tight-knit clique</h4>
                <p className='small-text-block'>Become part of an amazing community that encourages love for one another and the planet. As our member base expands our goal is to give each and every one of our collectors a more rewarding experience as well as continuous exclusive beneffits for being a part of the TBC vision.</p>
              </div>
            </div>
            <img className='small-text-block-bear' src={'./spacebear.png'} />
            <div className='right-side-small-text-block'>
              <div>
                <h4 className='small-text-block-title'>Full transparency</h4>
                <p className='small-text-block'>We believe in complete ownership and fair distribution within our clique. Which is why we have put a strong emphasis on security of our investors community members.</p>
              </div>
              <div>
                <h4 className='small-text-block-title'>Rewards</h4>
                <p className='small-text-block'>
                  As the project continues to grow, so does the exclusive access and rewards given to our clique. We will be offering consistent prizes in multiple forms, such as airdrops, sneak-peaks, merchandise, and much more. Our goal is to constantly give back to our clique that supports us through this evolution. 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='paragraph-container'>
          <h1 className='blood-font title airdrop' >Air-Drop's / CLTV. Membership</h1>
          <div style={{display: 'flex'}}>
            <p className='mid-paragraph'> Enjoy the luxury of getting in early! <br/> Collectors who mint & hold a certain amount of rare TBC NFT's from our first drop will be granted an exclusive CLTV. Membership Card which will gift them NFT's from future projects as well as projects in partnership.</p>
            <img src={'./yellow_bear_transparent.png'} className='yellow_bear_pic' />
          </div>
        </div>
          <div className='gallery-container'>
            <img src={'./bear_gallery21.png'} className='second-gallery biggest' />
            <img src={'./bear_gallery22.png'} className='second-gallery medium' />
            <img src={'./bear_gallery23.png'} className='second-gallery smallest' />
          </div>
        <Container ref={charityRef}>
          <h1 className='header-3 blood-font'>Charitable + Carbon Neutral</h1>
          <div className='two-column-container'>
            <div className='longer-mid-paragraph left-aligned'>
              <p> For the initial launch, every TBC NFT minted (7,777) we will be planting a tree over various geographical locations. This not only allows the TBC project to be carbon neutral but it also helps our diverse planet and the eople who live on it . Thanks to our partners, by planting trees through TBC, you will be: </p>
              <ul className='outside-list left-aligned'>
                <li >Empowering Local women in Rwanda: Providing mentorship to local farmers through their women's cooperative, helping them revive their land and improve their quality of life.</li>
                <li>Improving food security: By planting both native trees and fruit trees, local farmers can rehabilitate their land while creating a sustainable sourc eof food & income.</li>
                <li>Protecting biodiversity across multiple locations benefiting water supply across the globe as well as animal habitats & conservation.</li>
              </ul>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <img src={'./shiny_blue.png'} className='right-side-image'  width={450} height={500} />
            <img src={'./otp.png'} className='right-side-image'  width={'35%'} style={{alignItems: 'center', justifyContent: 'center'}} />
            </div>
          </div>
        </Container>
        <Container>
          <div ref={VIPRef} className='two-column-container inner-container' style={{marginTop: 100}}>
            <img src={'./hoody.png'} className='right-side-image'  width={'35%'} height={'30%'} />
            <div className='right-box'>
              <h1 className='header-4 blood-font'>TBC Utility</h1>
              <p className='slightly-longer-mid-paragraph-2 left-aligned'>TBC collectors who hold a TBC collectable NFT will have exclusive rights to shop the TBC brand which offers a diverse selection of original hype cut N' SEW as well as exclusive merch drops, TBC physical art + much more.</p>
            </div>
          </div>
        </Container>
      <div style={{marginTop: 80}}>
        <img src={'./close_up_hoodie.png'} width={'100%'} />
        <img src={'./bear_banner.png'}  width={'100%'} style={{marginTop: -10}} />
        <img src={'./t_shirt.png'} className='t-shirt-pic' style={{marginTop: -10}} />
      </div>
      <Container>
        <div className='three-column' style={{marginTop: 100}}>
          <img src={'./milky_bear.png'} height={'30%'} width={'30%'} />
          <div>
            <p className='paragraph-text'>The TBC Devil Trucker Hat features a rare fire TBC collectible NFT image sitting on the forefront of the face along with the iconic The Bear CLTV. text above. Below lays TBC printed on the visor of the hat as a minimalistic aesthetic.</p>
          </div>
          <img src={'./devil_hat.png'} style={{marginLeft: 10}} width={'50%'} height={'50%'} />
        </div>
      </Container>
      <Container>
        <h1 className='header-5 blood-font'>Physical Art</h1>
        <div className='two-column-container' style={{marginTop: 50, marginBottom: 70}}>
          <img src={'./art_slide.png'} className='right-side-image'  width={'45%'} height={'40%'} style={{marginLeft: '5%'}} />
          <div className='right-box'>
            <p className='slightly-longer-mid-paragraph3'>TBC Physical art is carefully crafted with the same design process as their NFT collection. The art is printed with high-quality fine art technology and coated with numerous slections of finishings such as resin on canvas, matte canvas, glossy metal, acrylic, + more.</p>
          </div>
        </div>
        <div className='two-column-container margin-call'>
          <div className='right-box'>
            <p className='slightly-longer-mid-paragraph left-aligned'>Collectors who mint their TBC NFT(S) will have exclusive access to order a 1 of 1 piece of physical art, the same of that TBC NFT they minted. Minters will have the option to choose from a variety of art finishes, coats and frames.</p>
          </div>
          <img src={'./art_slide2.png'} className='right-side-image'  width={'45%'} height={'40%'} />
        </div>
      </Container>
      <div className='bottom-meet-team-container'>
        <div className='blood-font title roadmap'>ROADMAP</div>
        <div className='four-square-container'>
          <div className='left-side-small-text-block'>
            <div className='quarter-text'>
              <h4 className='small-text-block-title' >Step No.1</h4>
              <h4 className='small-text-block-title' >out from Hibernation</h4>
              <p  className='small-text-block'>TBC & DNA Labs have established their initial marketing push, driving collectors, art enthusiasts, & fashion lovers from all around the glob to our main discord server generating the TBC COmmunity, & building the hype before the drop. TBC will also give away two of the first Physical Prints on Acrylic + more.</p>
            </div>
            <div className='quarter-text'>
              <h4 className='small-text-block-title'>Step No.2</h4>
              <h4 className='small-text-block-title'>lets mint</h4>
              <p className='small-text-block'>The Bear CLTV Collection is sold out and the hype forest is seeded. The TBC hype brand is in full force ready to launch the online shop for all collectors to purchase exclusive clothing drops. Physical mint to art will follow.</p>
            </div>
          </div>
          <img className='small-text-block-bear' src={'./spacebear.png'} />
          <div className='right-side-small-text-block'>
            <div>
              <h4 className='small-text-block-title'>Step No.3</h4>
              <h4 className='small-text-block-title'>brand establishing</h4>
              <p className='small-text-block'>TBC has an established but it doesn't stop there...The team will begin raining endorsements, partnerships, and collaborations. By this time, the physical mint to art will be up in full effect.</p>
              <br />
              <br />
              <br />
            </div>
            <div>
              <h4 className='small-text-block-title'>Step No.4</h4>
              <h4 className='small-text-block-title'>the hype is real</h4>
              <p className='small-text-block'>
                7777 trees have been planted, the CLTV merch shop is open for collectors, the NFT to phsyical art platform is activated & partnerships/endorsements are a-go. DNA Labs will give the community a 'sneak peak' off their next drop which TBC holders holding select TBC bears will be air dropped. 
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div ref={teamRef} style={{alignContent: 'center', paddingBottom: 100, marginTop: 100}}>
        <h1 className='blood-font meet-team'> MEET THE TEAM</h1>
        <h2 style={{textAlign: 'center'}} className='coming-soon'>COMING SOON...</h2>
        <div className='team-container'>
          <div style={{marginRight: '10%'}}>
            <div style={{display: 'flex', flex: 1, flexDirection: 'row'}}>
              <img src='./twitter.png' width={100} />
              <div className='bear-link'><a href='https://www.twitter.com/thebearcltv' target="_blank" style={{color: 'black'}}>@THEBEARCLTV</a></div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: -30}}>
              <img src='./discord.png' width={100} />
              <div className='bear-link'><a target="_blank" href='https://discord.gg/SuR9bVqP3z' style={{color: 'black'}}>@TheBearCLTV</a></div>
            </div>
            <div style={{marginLeft: '15%',textAlign: 'center', fontSize: 14, width: 175}} className='blood-font'>
              2021 THE BEAR CLTV LLC <br/>
              <div style={{fontFamily: 'Fira Code', textTransform: 'uppercase'}}>www.thebearcltv.com</div>
            </div>
          </div>
          <div style={{marginLeft: 10, marginTop: 35, width : '100%'}}>
            <h1 className='blood-font connected-title'>STAY CONNECTED</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// let res = await contract.methods
//     .mint(1)
//     .send({
//       from: '0xcd3B766CCDd6AE721141F452C550Ca635964ce71',
//       to: '0xd46e8dd67c5d32be8058bb8eb970870f07244567',
//       gas: '0x76c0', // 30400
//       gasPrice: '0x9184e72a000', // 10000000000000
//       value: '0x9184e72a', // 2441406250
//       data:
//         '0xa0712d680000000000000000000000000000000000000000000000000000000000000001',
//     })
//     .on('confirmation', (confirmations, receipt) => {
//       console.log('CONFIRMATION');
//       console.log(confirmations);
//       console.log(receipt);
//     });
    // console.log('res ', res);
    // window.ethereum
    // .request({
    //   method: 'eth_sendTransaction',
    //   params: [
    //     {
    //       from: account,
    //       to: '0xeAf59aCF00435857d4D0e26E2b48948B86A8A8ca',
    //       value: '0x29a2241af62c0000',
    //       gasPrice: '0x09184e72a000',
    //       gas: '0x2710',
    //     },
    //   ],
    // })
    // .then((txHash) => console.log(txHash))
    // .catch((error) => console.error);
    // let res = await contract.methods.NFT_PRICE().send({from:'0xcd3B766CCDd6AE721141F452C550Ca635964ce71'})
    // console.log('res: ', res);
    // useEffect(() => {
  //   const init = async () => {
  //     // const manager = await contract.methods.manager().call();
  //     // const players = await lottery.methods.getPlayers().call();
  //     // const balance = await web3.eth.getBalance(contract.options);
  //     // console.log('balance ', balance);
  //     // console.log('check ', await contract.methods.);
  //     // console.log('check ', contract.options);
  //     console.log('check 3: ', contract.eth);
  //     // setManager(manager);
  //     // setPlayers(players);
  //     // setContractBalance(balance);
  //   };
  //   init();
  // }, []);
  // useEffect(() => {
  //   context.setFirstValidConnector(['MetaMask'])
  // }, [])
  // if (!context.active && !context.error) {
  //   // console.log('loading');
  //   // loading
  //   // return ...
  // } else if (context.error) {
  //   console.log('error ', context.error);
  //   //error
  //   // return ...
  // } else {
  //   // console.log('success');
  //   // success
  //   // return ...
  // }