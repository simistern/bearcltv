import React, { useEffect, useState, useRef } from 'react';
import Container from '@material-ui/core/Container';
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import './App.css';
import mixpanel from 'mixpanel-browser';
import Web3EthContract from 'web3-eth-contract';
import Modal from '@material-ui/core/Modal';

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: "3f30c3d9a4794b6bac600ac401675dc8",
    }
  },
};

mixpanel.init("bd2b7eb79cc996dfe5699b608c910bfe");
// const contractAddress = '0xb2D1eeaF3757C4C20F66B6a2d71F94ADbF81Be53'; --test address
const contractAddress = '0xb9fe3065eca7d9a3820c3e088f072a428379de4f'; // --- prod address

const abi = [
 {"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"maxPurchase","type":"uint256"},{"internalType":"uint256","name":"maxSupply_","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_NFT_PURCHASE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NFT_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"calcStartingIndex","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencySetStartingIndexBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"flipSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numberOfTokensMax5","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"reserveTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI_","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startingIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startingIndexBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}
];

const web3Modal = new Web3Modal({
  cacheProvider: true, // optional
  providerOptions // required
});

let provider;
let web3;
const releaseDate = new Date("09/26/2021 14:00");

const App = () => {
  const homeRef = useRef(null);
  const teamRef = useRef(null);
  const aboutRef = useRef(null);
  const charityRef = useRef(null);
  const VIPRef = useRef(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [mintSuccessful, setMintSuccessful] = useState(false);
  const [supplyModalIsOpen, setSupplyModalIsOpen] = useState(false);
  const [transactionHash, setTransactionHash] = useState(null);
  const [mintError, setMintError] = useState(false);
  const [account, setAccount] = useState();
  const [price, setPrice] = useState(40000000000000000);
  const [purchaseAmount, setPurchaseAmount] = useState(1);
  const [walletIsConnected, setWalletIsConnected] = useState(false);
  const [maxPurchase, setMaxPurchase] = useState(20);
  const [mintingEnabled, setMintingEnabled] = useState(true);

  function useInterval(callback, delay) {
    const savedCallback = useRef(callback)
  
    // Remember the latest callback if it changes.
    useEffect(() => {
      savedCallback.current = callback
    }, [callback])
  
    // Set up the interval.
    useEffect(() => {
      // Don't schedule if no delay is specified.
      if (delay === null) {
        return
      }
  
      const id = setInterval(() => savedCallback.current(), delay)
  
      return () => clearInterval(id)
    }, [delay])
  }

  // useInterval(
  //   () => {
  //     if(releaseDate > new Date()){
  //       console.log('not yet... ', new Date());
  //     }else{
  //       console.log('now!... ');
  //       // setMintingEnabled(true);
  //     }
  //   },
  //   // Delay in milliseconds or null to stop it
  //   mintingEnabled === false ? 1000 : null,
  // )

  useEffect(() => {
    const getProvider = async () => {
      console.log('cached ', web3Modal.cachedProvider);
      provider = await web3Modal.connect();
      Web3EthContract.setProvider(provider);
      web3 = new Web3(provider);
    }
    getProvider();
    onConnect();
  }, [web3]);

  async function onConnect() {
    console.log("Opening a dialog", web3Modal);
    try {
      provider = await web3Modal.connect();
      Web3EthContract.setProvider(provider);
      fetchAccountData();
    } catch(e) {
      console.log("Could not get a wallet connection", e);
      return;
    }
    // Subscribe to accounts change
    provider.on("accountsChanged", (accounts) => {
      console.log('accoutns changes ')
      fetchAccountData();
    });
    // Subscribe to chainId change
    provider.on("chainChanged", (chainId) => {
      console.log('chain changes ')
      fetchAccountData();
    });
    // Subscribe to networkId change
    provider.on("networkChanged", (networkId) => {
      console.log('network changes ')
      fetchAccountData();
    });
    provider.on("connect", (info) => {
      console.log('connected ', info);
    });
    await refreshAccountData();
  }
  async function refreshAccountData() {
    await fetchAccountData(provider);
  }

  /**
 * Kick in the UI action after Web3modal dialog has chosen a provider
 */
async function fetchAccountData() {
  // Get a Web3 instance for the wallet
  const web3 = new Web3(provider);
  console.log("Web3 instance is", web3);
  Web3EthContract.setProvider(provider);
  // Get connected chain id from Ethereum node
  const chainId = await web3.eth.getChainId();
  // Get list of accounts of the connected wallet
  const accounts = await web3.eth.getAccounts();
  // MetaMask does not give you all accounts, only the selected account
  console.log("Got accounts", accounts);
  let selectedAccount = accounts[0];
  // getPrices();
  setAccount(selectedAccount);
  setWalletIsConnected(true);
}

  useEffect(() => {
    mixpanel.track("Site visit");
  }, []);

  const homeScroll = () => homeRef.current.scrollIntoView();
  const teamScroll = () => teamRef.current.scrollIntoView();
  const aboutScroll = () => aboutRef.current.scrollIntoView();
  const charityScroll = () => charityRef.current.scrollIntoView();
  const VIPScroll = () => VIPRef.current.scrollIntoView();
  const contract = new Web3EthContract(abi, contractAddress);
  const handleCloseModal = () => { setModalIsOpen(false); }
  const handleSupplyCloseModal = () => { setSupplyModalIsOpen(false);}
  
  const validatePurchaseAmount = (e) => {
    if(e < (maxPurchase + 1)){
      setPurchaseAmount(e);
    }
  }

  useEffect(() => {
    const getPrices = async () => {
      try {
      let res = await contract.methods.NFT_PRICE().call();
      let tempMaxPurchase = await contract.methods.MAX_NFT_PURCHASE().call();
      console.log('NFT PRICE: ', res, tempMaxPurchase);
      setPrice(res);
      setMaxPurchase(parseInt(tempMaxPurchase));
      } catch (error) {
        console.log('no price? ', error)
      }
    }
    getPrices();
  }, [web3, contract, web3Modal]);

  const onPurchase = async () => {
    setSupplyModalIsOpen(false);
    setMintError(false);
    setModalIsOpen(true);
    try{
      console.log('show mint: ', account, purchaseAmount, price)
      contract.methods.mint(purchaseAmount).send({
        from: account,
        numberOfTokensMax5: 1 * purchaseAmount,
        value:  (price * purchaseAmount)
      })
      .on('transactionHash', function(hash){
          // ...
      })
      .on('confirmation', function(confirmationNumber, receipt){
          // ...
      })
      .on('receipt', function(receipt){
          // receipt example
          console.log(receipt);
          setTransactionHash(receipt.transactionHash);
          mixpanel.track('successful mint');
          setModalIsOpen(false);
          setMintSuccessful(true);
      })
      .on('error', function(error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
          console.log('error: ', error)
          setModalIsOpen(false);
          setMintError(true);
      });
        // .then((res)=> {
        //     console.log('res ', res);
        //     mixpanel.track('successful mint');
        //     setModalIsOpen(false);
        //     setMintSuccessful(true);
        //   }
        // )
    }catch(error){
      console.log('error ', error);
      setModalIsOpen(false);
      setMintError(true);
    }
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
          {mintError ?
              <div className='blood-font' style={{display: 'flex', justifyContent: 'center', fontSize: 28, marginBottom: 20}}>There was an error minting your bear. Please try again or contact a member of the team.</div>
            : null
          }
          {mintSuccessful ? 
              <div>
                <div className='blood-font' style={{display: 'flex', justifyContent: 'center', fontSize: 28, marginBottom: 20}}>Mint Successful</div> 
                <div className='coming-soon-font' style={{display: 'flex', justifyContent: 'center', marginBottom: 20}}>Transaction Hash: {transactionHash || 'null'}</div> 
              </div>
          : null}
          <div className='button-container'>
            {mintingEnabled ? 
              walletIsConnected ?
                <button onClick={() => setSupplyModalIsOpen(true)} className='coming-soon-button'>MINT A BEAR</button>
              : <button onClick={() => onConnect()} className='coming-soon-button'>CONNECT WALLET</button> 
            : <button className='coming-soon-button'>COMING SOON</button> }
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
              <p> For the initial launch, every TBC NFT minted (7,777) we will be planting a tree over various geographical locations. This not only allows the TBC project to be carbon neutral but it also helps our diverse planet and the people who live on it . Thanks to our partners, by planting trees through TBC, you will be: </p>
              <ul className='outside-list left-aligned'>
                <li >Empowering Local women in Rwanda: Providing mentorship to local farmers through their women's cooperative, helping them revive their land and improve their quality of life.</li>
                <li>Improving food security: By planting both native trees and fruit trees, local farmers can rehabilitate their land while creating a sustainable source of food & income.</li>
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
            <p className='slightly-longer-mid-paragraph3'>TBC Physical art is carefully crafted with the same design process as their NFT collection. The art is printed with high-quality fine art technology and coated with numerous selections of finishings such as resin on canvas, matte canvas, glossy metal, acrylic, + more.</p>
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
              <p  className='small-text-block'>TBC & DNA Labs have established their initial marketing push, driving collectors, art enthusiasts, & fashion lovers from all around the globe to our main discord server generating the TBC COmmunity, & building the hype before the drop. TBC will also give away two of the first Physical Prints on Acrylic + more.</p>
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
              <p className='small-text-block'>TBC has an established brand but it doesn't stop there...The team will begin raining endorsements, partnerships, and collaborations. By this time, the physical mint to art will be up in full effect.</p>
            </div>
            <div>
              <h4 className='small-text-block-title'>Step No.4</h4>
              <h4 className='small-text-block-title'>the hype is real</h4>
              <p className='small-text-block'>
                7777 trees have been planted, the CLTV merch shop is open for collectors, the NFT to phsyical art platform is activated & partnerships/endorsements are a-go. DNA Labs will give the community a 'sneak peak' of their next drop which TBC holders holding select TBC bears will be air dropped. 
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
              <div className='bear-link'><a target="_blank" href='https://discord.com/invite/thebearcltv' style={{color: 'black'}}>@TheBearCLTV</a></div>
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

  // const [visible, setVisible] = useState(true)
  // const hide = () => setVisible(false)
  // useTimeout(hide, 1000);import useTimeout from './timeout';
  // import useTimeout from './timeout';
