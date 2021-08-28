import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './App.css';

const Text = ({text}) => {
  return (
    <span className="text-style">
      {text}
    </span>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Grid container spacing={2}>
          <Text text={'TBC'} />
          <Button variant="contained" color="secondary">
          Coming Soon
        </Button>
        </Grid>
      </header>
      <Container maxWidth="lg">
        <h1> The Bear CLTV</h1>
        <img src={'./bluebear.png'} style={{with: '100%', height: "100%"}} />
        <h1> Exclusive Collectable NFT's that offer hybrid access to the TBC Hype brand + Much more. </h1>
      </Container>
      <Container maxWidth="lg" style={{flexGrow: 1}}>
        <Grid container justifyContent="center" spacing={1} style={{display: 'inline-block'}}>
          <Grid item xs={4} >
            <img src={'./goldbear.png'} style={{display: 'inline-block'}} style={{with: '50%', height: '50%'}} />
          </Grid>
          <Grid item xs={4}>
            <img src={'./blackbear.png'} style={{display: 'inline-block'}} style={{with: '10%', height: '10%'}} />
          </Grid>
          <Grid item xs={4}>
            <img src={'./yellowbear.png'}  style={{display: 'inline-block'}} style={{with: '10%', height: '10%'}} />
          </Grid>
        </Grid>
      </Container>
      <Container>
        <h1>What is TBC?</h1>
        <p>TBC is a eco-friendly hybrid collective of art lovers emerged in the NFT space, collecgtors realm, & of fashion enthusiasts. The Bear CLTV. is a collection of 10,0000 unique NFT's curated and carefuly
          crafted programaticallywith hundreds of variations, personality traits, and accessories. Moreover, the Bear CLTV. will becomea foundational clique within the blockchain itself. Though TBC is a NFT colleectible project, TBC is bringing a diverse selection of utility.
        </p>
      </Container>
      <Container>
        <h1>TBC NFT's</h1>
        <div>
          <h6>Exclusivity</h6>
          <p>The bear collective offfers an exclusive 10,000 NFT collection that includes extreme rar's, special graphics, and other innovations not yet prominent in the NFT space.</p>
        </div>
        <div>
          <h6>Tight-knit clique</h6>
          <p>Become part of an amazing community that encourages love for one another and the planet. As our member base expands our goal is to give each and every one of our collectors a more rewarding experience as well as continuous exclusive beneffits for being a part of the TBC vision.</p>
        </div>
        <img src={'./spacebear.png'}  style={{display: 'inline-block'}} style={{with: '10%', height: '10%'}} />
        <div>
          <h6>Full transparency</h6>
          <p>We believe in complete ownership and fair distribution within our clique. Which is why we have put a strong emphasis on security of our investors community members.</p>
        </div>
        <div>
          <h6>Rewards</h6>
          <p>
            As the project continues to grow, so does the exclusive access and rewards given to our clique. We will be offfering consistent prizes in multiple forms, such as airdorps, sneak-peaks, merchandise, and much more. Our goal is to constantly give back to our clique that supports us through this evolution. 
          </p>
        </div>
      </Container>
      <Container>
        <h6>Air-drop's / CLTV. Membership</h6>
        <p>Enjoy the luxury of getting in early! Collectors who mint & hold a certain amount of rare TBC NFT's from our first drrop will be granted an exclusive CLTV. Membership Card which will gift them NFT's from future projects as well as projects in partnership.</p>
        <img src={'./spacebear.png'}  style={{display: 'inline-block'}} style={{with: '10%', height: '10%'}} />
      </Container>
      <Container maxWidth="lg" style={{flexGrow: 1}}>
        <Grid container justifyContent="center" spacing={1} style={{display: 'inline-block'}}>
          <img src={'./goldbear.png'} style={{display: 'inline-block'}} width={'30%'} style={{with: '10%', height: '10%'}} />
          <img src={'./goldbear.png'} style={{display: 'inline-block'}} width={'30%'} style={{with: '10%', height: '10%'}} />
          <img src={'./goldbear.png'} style={{display: 'inline-block'}} width={'30%'} style={{with: '10%', height: '10%'}} />
        </Grid>
      </Container>
      <Container>
        <h2>Charitable + Carbon Neutral</h2>
        <p>For the initial launch, every TBC NFT minted (10,000) we will be planting a tree over various geographical locations. This not only allows the TBC project to be carbon neutral but it also helps our diverse planet and the eople who live on it . Thanks to our partners, by planting trees through TBC, you will be: </p>
          <li>Empowering Local women in Rwanda: Providing mentorship to local farmers through their women's cooperative, helping them revive their land andd irpove their quality of life.</li>
          <li>Improving food security: By planting both native trees and fruit trees, local farmers can ehabilitate their land wle creating a sustainable sourc eof food & income.</li>
          <li>Protecting biodiviserty across multiple locations benefiting water supply across the globe as well as animal habitats & conservation.</li>
          <img src={'./yellowbear.png'}  style={{display: 'inline-block'}} style={{with: '10%', height: '10%'}} />
      </Container>
      <Container>
        <img src={'./yellowbear.png'}  style={{display: 'inline-block'}} style={{with: '10%', height: '10%'}} />
        <div>
          <h2>TBC Utility</h2>
          <p>TBC collectors who hold a TBC collectable NFT will have exclusive rights to shop the TBC brand which offerrs a diverse selection of original hype cut N' SEW as well as exclusive merch drops, TBC physical art + much more.</p>
        </div>
      </Container>
      <Container>
        <img src={'./goldbear.png'} style={{display: 'inline-block'}} width={'100%'} style={{with: '10%', height: '10%'}} />
        <img src={'./goldbear.png'} style={{display: 'inline-block'}} width={'100%'} style={{with: '10%', height: '10%'}} />
        <img src={'./goldbear.png'} style={{display: 'inline-block'}} width={'100%'} style={{with: '10%', height: '10%'}} />
      </Container>
      <Container>
        <img src={'./yellowbear.png'}  style={{display: 'inline-block'}} style={{with: '10%', height: '10%'}} />
        <div>
          <p>The TBC Devil Trucker Hat features a rare fire TBC collectible NFT image sitting on the forefront of the face along with the iconic The BEar CLTV. text above. Below lays TBC printed on the visor of the hat as a minimalstic aesthetic.</p>
        </div>
        <img src={'./yellowbear.png'}  style={{display: 'inline-block'}} style={{with: '10%', height: '10%'}} />
      </Container>
      <Container>
        <h2>Physical Art</h2>
        <div>
          <img src={'./gallery.png'}  style={{display: 'inline-block'}} style={{with: '10%', height: '10%'}} />
          <p>TBC Pgysical art is carefully crafted with the same design process as their NFT collection. The art is printed with high-quality fine art technology and coated with numerous slections of finishings such as resin on canvas, matte canvas, glossy metal, acrylic, + more.</p>
        </div>
        <div>
          <p>TBC Pgysical art is carefully crafted with the same design process as their NFT collection. The art is printed with high-quality fine art technology and coated with numerous slections of finishings such as resin on canvas, matte canvas, glossy metal, acrylic, + more.</p>
          <img src={'./gallery.png'}  style={{display: 'inline-block'}} style={{with: '10%', height: '10%'}} />
        </div>
      </Container>
      <Container>
        <h2>Meet the team</h2>
        <h2>Coming soon...</h2>
        <div>
          <div>
            <li>@thebearcltv</li>
            <li>@thebearcltv</li>
            <li>Coming Soon...</li>
          </div>
          <div>
            <h3>Stay Connected</h3>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
