import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Row, Col, Button, Card } from 'react-bootstrap';
import './App.css';
import wiredLogo from './wired-logo.png';
import Footer from './components/Footer';
import metaverseImage from './metaverse.jpg';
import openaiImage from './openai.jpg';

const App = () => {
  return (
    <Container>
      <Navbar bg="light" expand="lg" className="border-bottom lh-1 px-2 py-3 justify-content-between nav-font">
        <Navbar.Brand href="#">
          <img
            src={wiredLogo}
            height="30"
            className="d-inline-block align-top"
            alt="Wired Logo"
          />
        </Navbar.Brand>
        <Nav className="nav-scroller py-1 mb-3 border-bottom justify-content-between nav-font" style={{position:"absolute", left:"18%", top:"20%"}}>
          <Nav.Item><Nav.Link className="link-body-emphasis active ms-1" href="#">BACKCHANNEL</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link className="link-body-emphasis" href="#">BUSINESS</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link className="link-body-emphasis" href="#">CULTURE</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link className="link-body-emphasis" href="#">GEAR</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link className="link-body-emphasis" href="#">IDEAS</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link className="link-body-emphasis" href="#">SCIENCE</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link className="link-body-emphasis" href="#">SECURITY</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link className="link-body-emphasis" href="#">POLITICS</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link className="link-body-emphasis me-1" href="#">MERCH</Nav.Link></Nav.Item>
        </Nav>
        <Nav>
          <Nav.Link href="#" style={{position:"absolute", left:"77.5%", top:"20%"}}>Subscribe Now</Nav.Link>
          <Nav.Link href="#" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" style={{position:"absolute", left:"87%", top:"27%"}} width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="mx-3" role="img" viewBox="0 0 24 24">
              <circle cx="10.5" cy="10.5" r="7.5" />
              <path d="M21 21l-5.2-5.2" />
            </svg>
          </Nav.Link>
          <Button variant="outline-secondary" size="md" style={{position:"absolute", left:"92%", top:"23%", width:"fit-content", fontSize:"16px"}}>Sign up</Button>
        </Nav>
      </Navbar>

      <main>
        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis blogbg">
          <div className="col-lg-6 px-0">
            <h1 className="display-4 fst-italic text-white">The Future of Digital Cash Is Not on the Blockchain
            </h1>
            <p className="lead my-3 text-white">If you want the privacy of paper money, you need something that leaves no paper trail.
            </p>
            <p className="lead mb-0"><a href="#" className="text-body-emphasis fw-bold">Continue reading...</a></p>
          </div>
        </div>


        <Row className="mb-2">
          <Col md={6}>
            <Card  className="mb-4 shadow-sm">
              <Card.Img variant="top" src={metaverseImage} />
              <Card.Body>
                <Card.Title>The Metaverse Was Supposed to Be Your New Office. You’re Still on Zoom</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Nov 12</Card.Subtitle>
                <Card.Text>
                Tech founders painted a vision of employees clocking into virtual workplaces. 
                But the adoption of VR at work has been slow.
                </Card.Text>
                <Button variant="primary">Continue reading</Button>
              </Card.Body>
            </Card>


          </Col>

          
          <Col md={6}>

          <Card  className="mb-4 shadow-sm" style={{height:"95.25%"}}>
              <Card.Img variant="top" src={openaiImage} style={{height:"95%"}}/>
              <Card.Body>
                <Card.Title>OpenAI Is Testing Its Powers of Persuasion</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Nov 11</Card.Subtitle>
                <Card.Text>Sam Altman is touting AI’s ability to sway people's behavior. His company is also wrestling with the risks. The development of full artificial intelligence could spell the end of the human race.
                </Card.Text>
                <Button variant="primary">Continue reading</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={8}>
            <h3 className="pb-4 mb-4 fst-italic border-bottom">From the Firehose</h3>

            <article className="blog-post">
              <h2 className="display-5 link-body-emphasis mb-1">BlockChain & Paper Trails</h2>
              <p className="blog-post-meta">March 28, 2022 by <a href="#">Gilad Edelman</a></p>
              <hr />
              <p>
                <b>WHEN YOU HEAR</b> the phrase <i>“digital cash,”</i> what comes to mind? Perhaps a payment app, like Venmo,
                that you use in situations that used to call for paper bills, like paying back a friend for dinner. Or maybe you think of cryptocurrencies. After all, the original Bitcoin white paper is titled “Bitcoin: A Peer-to-Peer Electronic Cash System.”<br /><br />

                But none of these digital payment options are really like cash. Unlike paper money, they require both an internet connection and a bank account to use. Above all, they lack what has long made cash the preferred medium of civil libertarians, dissidents, and criminals alike: privacy. The only kind of money that leaves no paper trail is paper. <br /><br />

                A bill introduced in Congress on Monday seeks to re-create the virtues of cash, privacy and all, in digital form. The <b>ECASH Act </b>would direct the US government to experiment with issuing digital dollars that are stored on hardware, not in bank accounts, and can be used without an internet connection. <br /><br />

                The idea of new, surveillance-proof currency will surely face skepticism within government. But with paper money on a slow path to extinction, the case for a real digital alternative will only grow stronger.
                It’s easy enough to understand why apps like Venmo, which infamously makes your transactions public by default, are an imperfect substitute for cash.
                <br /><br />
                Anyone using an app to send money around should be aware that they’re leaving a permanent digital trail that could be accessed by the government or malicious actors. With crypto, on the other hand, the lack of privacy is a bit counterintuitive. Privacy was an essential part of Bitcoin’s original appeal. <br /><br />Early crypto enthusiasts believed that the blockchain would free them from Big Brother. Using a distributed ledger rather than a centralized one would remove the need for a banklike middleman that could block transactions. And tying accounts to cryptographic wallet addresses, rather than offline identity, would keep transactions anonymous. This led to a profusion of illegal activity taking advantage of cryptocurrencies.
                But, as my colleague Andy Greenberg illustrates in his forthcoming book, the early faith in crypto anonymity was misplaced. <br /><br />
                The thing about blockchains is that while your transactions might be hidden behind a crypto wallet address, they are also permanently stored on a public database. It didn’t take law enforcement agencies too long to figure out how to connect those transactions and wallets to the real-world identities behind them.
                <br />
              </p>
              <h2></h2>
              <blockquote className="blockquote">
                <p>"In the grand scheme of things, distributed ledger versus regular ledger is almost irrelevant on the question of cash-like privacy,"</p>
                <p><i><small>- Rohan Grey, a law professor at Willamette University.</small></i></p>

              </blockquote>
              <p>The more meaningful distinction, he explains, is between two different currency models: tokens and accounts. When you pay for something with cash, you’re handing over a physical token. Whoever holds the token has the money, and there is no third party to the transaction. When you send a payment using Venmo, or a bank, on the other hand, you’re just directing them to update your account by moving some numbers around in their books. The same thing is true of cryptocurrencies; the only meaningful difference is that the network as a whole, rather than a financial institution, approves the transactions.</p>
            </article>
          </Col>
        </Row>
      </main>
      <Footer/>
    </Container>
  );
};

export default App;
