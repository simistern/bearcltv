import React, { useRef } from 'react';
import Container from '@material-ui/core/Container';
import './App.css';

function App() {
  const homeRef = useRef(null);
  const teamRef = useRef(null);
  const aboutRef = useRef(null);
  const charityRef = useRef(null);
  const VIPRef = useRef(null);

  const homeScroll = () => homeRef.current.scrollIntoView();
  const teamScroll = () => teamRef.current.scrollIntoView();
  const aboutScroll = () => aboutRef.current.scrollIntoView();
  const charityScroll = () => charityRef.current.scrollIntoView();
  const VIPScroll = () => VIPRef.current.scrollIntoView();

  return (
    <div className="App" ref={homeRef}>
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
        <div style={{marginLeft: '5%', marginRight: '5%'}}>
          <div className='blood-font' style={{fontSize: 40, marginTop: 100, marginBottom: 50}}>TBC</div>
          <div className='button-container'>
            <button onClick={() => alert('you just minted an NFT!')} className='coming-soon-button'>COMING SOON.</button>
          </div>
          <h1 className='bear-header blood-font'> THE BEAR CLTV.</h1>
          <img src={'./bluebear.png'} className='first-bear-image' />
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
          <h1 className='blood-font' style={{textAlign: 'center', fontSize: '6vw', marginBottom:60, marginTop: 80}}>What is TBC?</h1>
          <p className='center-paragraph'>
            TBC is a eco-friendly hybrid collective of art lovers emerged in the NFT space, collectors realm, & of fashion enthusiasts. The Bear CLTV. is a collection of 10,0000 unique NFT's curated and carefuly
            crafted programatically with hundreds of variations, personality traits, and accessories. Moreover, the Bear CLTV. will becomea foundational clique within the blockchain itself. Though TBC is a NFT collectible project, TBC is bringing a diverse selection of utility.
          </p>
        </Container>
        <div>
          <h1 style={{textAlign: 'center', marginBottom: -30, fontSize: '6vw'}} className='blood-font'>TBC NFT's</h1>
          <div className='four-square-container'>
            <div className='left-side-small-text-block'>
              <div className='quarter-text'>
                <h4 className='small-text-block-title' >Exclusivity</h4>
                <p  className='small-text-block'>The bear collective offers an exclusive 10,000 NFT collection that includes extreme rar's, special graphics, and other innovations not yet prominent in the NFT space.</p>
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
                  As the project continues to grow, so does the exclusive access and rewards given to our clique. We will be offfering consistent prizes in multiple forms, such as airdorps, sneak-peaks, merchandise, and much more. Our goal is to constantly give back to our clique that supports us through this evolution. 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{marginTop: 200, marginLeft: '10%', marginRight: '10%'}}>
          <h1 className='blood-font' style={{textAlign: 'center', fontSize: '5vw', marginBottom: 80}}>Air-Drop's / CLTV. Membership</h1>
          <div style={{display: 'flex'}}>
            <p className='mid-paragraph'> Enjoy the luxury of getting in early! <br/> Collectors who mint & hold a certain amount of rare TBC NFT's from our first drop will be granted an exclusive CLTV. Membership Card which will gift them NFT's from future projects as well as projects in partnership.</p>
            <img src={'./spacebear.png'} style={{marginLeft: '10%', marginTop: -60}} />
          </div>
        </div>
          <div className='gallery-container'>
            <img src={'./bear_gallery21.png'} className='second-gallery' />
            <img src={'./bear_gallery22.png'} className='second-gallery' />
            <img src={'./bear_gallery23.png'} className='second-gallery' />
          </div>
        <Container ref={charityRef}>
          <h1 className='header-3 blood-font'>Charitable + Carbon Neutral</h1>
          <div className='two-column-container'>
            <div className='longer-mid-paragraph left-aligned'>
              <p> For the initial launch, every TBC NFT minted (10,000) we will be planting a tree over various geographical locations. This not only allows the TBC project to be carbon neutral but it also helps our diverse planet and the eople who live on it . Thanks to our partners, by planting trees through TBC, you will be: </p>
              <ul className='outside-list left-aligned'>
                <li >Empowering Local women in Rwanda: Providing mentorship to local farmers through their women's cooperative, helping them revive their land andd irpove their quality of life.</li>
                <li className='outside-list left-aligned'>Improving food security: By planting both native trees and fruit trees, local farmers can ehabilitate their land wle creating a sustainable sourc eof food & income.</li>
                <li className='outside-list left-aligned'>Protecting biodiversity across multiple locations benefiting water supply across the globe as well as animal habitats & conservation.</li>
              </ul>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <img src={'./bear_gallery23.png'} className='right-side-image'  width={'70%'} height={'90%'} />
            <img src={'./otp.png'} className='right-side-image'  width={'35%'} style={{alignItems: 'center', justifyContent: 'center'}} />
            </div>
          </div>
        </Container>
        <Container>
          <div ref={VIPRef} className='two-column-container' style={{marginTop: 100}}>
            <img src={'./bear_gallery23.png'} className='right-side-image'  width={'35%'} height={'30%'} />
            <div className='right-box'>
              <h1 className='header-4 blood-font'>TBC Utility</h1>
              <p className='slightly-longer-mid-paragraph left-aligned'>TBC collectors who hold a TBC collectable NFT will have exclusive rights to shop the TBC brand which offers a diverse selection of original hype cut N' SEW as well as exclusive merch drops, TBC physical art + much more.</p>
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
            <p style={{width: 160, lineHeight: 1.3, fontSize: '14px'}} className='paragraph-text'>The TBC Devil Trucker Hat features a rare fire TBC collectible NFT image sitting on the forefront of the face along with the iconic The Bear CLTV. text above. Below lays TBC printed on the visor of the hat as a minimalistic aesthetic.</p>
          </div>
          <img src={'./devil_hat.png'} style={{marginLeft: 10}} width={'50%'} height={'50%'} />
        </div>
      </Container>
      <Container>
        <h1 className='header-5 blood-font'>Physical Art</h1>
        <div className='two-column-container' style={{marginTop: 50, marginBottom: 70}}>
          <img src={'./art_slide.png'} className='right-side-image'  width={'45%'} height={'40%'} />
          <div className='right-box'>
            <p style={{marginLeft: 150}} className='slightly-longer-mid-paragraph'>TBC Physical art is carefully crafted with the same design process as their NFT collection. The art is printed with high-quality fine art technology and coated with numerous slections of finishings such as resin on canvas, matte canvas, glossy metal, acrylic, + more.</p>
          </div>
        </div>
        <div className='two-column-container' style={{marginLeft: 100, marginRight: 100}}>
          <div className='right-box'>
            <p className='slightly-longer-mid-paragraph left-aligned'>Collectors who mint their TBC NFT(S) will have exclusive access to order a 1 of 1 piece of physical art, the same of that TBC NFT they minted. Minters will have the option to choose from a variety of art finishes, coats and frames.</p>
          </div>
          <img src={'./art_slide2.png'} className='right-side-image'  width={'45%'} height={'40%'} />
        </div>
      </Container>
      <div ref={teamRef} style={{alignContent: 'center', paddingBottom: 100, marginTop: 100}}>
        <h1 style={{textAlign: 'center', marginBottom: 100}} className='blood-font'> MEET THE TEAM</h1>
        <h2 style={{textAlign: 'center'}} className='coming-soon'>COMING SOON...</h2>
        <div className='team-container'>
          <div style={{marginRight: '10%', width: 550}}>
            <ul className='outside-list'>
              <li style={{listStyleType: 'none', marginTop: 15}}><i className="small-padding fab fa-instagram"></i>@THEBEARCLTV</li>
              <li style={{listStyleType: 'none', marginTop: 15}}><i className="small-padding fab fa-twitter"></i>@THEBEARCLTV</li>
              <li style={{listStyleType: 'none', marginTop: 15}}><i className="small-padding fab fa-discord"></i>COMING SOON...</li>
            </ul>
            <div style={{marginLeft: '15%',textAlign: 'center', fontSize: 14, width: 175}} className='blood-font'>
              2021 THE BEAR CLTV LLC <br/>
              www.thebearcltv.com
            </div>
          </div>
          <div style={{marginLeft: 10, marginTop: 25, width : '100%'}}>
            <h1 className='blood-font'>STAY CONNECTED</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
