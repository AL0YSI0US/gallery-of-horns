import HornedBeast from './HornedBeast.js';

import React from 'react';

// [x] refactor code to include new bootstarppy thing 'Form'
import {CardDeck , Form} from 'react-bootstrap'

// import the Horn Count!
import HornCount from './HornCount.js';

// x----------------------------------------------------------------------------(((- D O N E -)))---]]]]
// [[[x- done]]] Map over the JSON data in your Main component to render each beast
// [[[x- done]]] Map over the JSON data in your Main component to render each beast
// [[[x- done]]] Send a function into your Main component that allows the user to update state in the App
// [x] R E F A C T O R > C O D E
// x-------------------------------------------------------------------------------T O . D O-------x]]]]
// [o] refactor code to include new bootstarppy thing in import line 'Form'
// [o] add Form element to the Main Component
// [o] what in the heck goes in the parameters????
// x-------------------------------------------------------------------------------T O . D O-------x]]]]

class Main extends React.Component {  
  render() {
    return (
      <div>
        <HornCount />
        {/* <Form>

        </Form>
        </HornCount> */}
        <CardDeck> 
          {this.props.beasts.map((thisLilBeastie, index) => {
            return (
              <div key={index}>
                <HornedBeast
                  showModal = {this.props.showModal}
                  title={thisLilBeastie.title}
                  img={thisLilBeastie.image_url}
                  description={thisLilBeastie.description}
                />
              </div>
            )
          })}
        </CardDeck>
      </div>
    )
  }
}

export default Main;


// x------------------------ M A N U A L . L A B O R ------------a.k.a.theHardWay---------------x]]]]]]]

// <HornedBeast title="Smaug" img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Smaug_par_David_Demaret.jpg/290px-Smaug_par_David_Demaret.jpg" keyword="Dragon" description="Fan illustration of Smaug from 'The Hobbit'" alt=""/>

// <HornedBeast title="Horned Lizard" img_url="https://www.nps.gov/band/learn/nature/images/short-horned-lizard-open-mouth-18.jpg?maxwidth=650&autorotate=false" keyword="lizard" description="Fave food: ants" alt=""/>

// <HornedBeast title="UniLego" img_url="https://images.unsplash.com/photo-1518946222227-364f22132616?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4836a6fca62e7dce9324346bacfde085&auto=format&fit=crop&w=2534&q=80" keyword="unilego" description="Lego figurine dressed in a unicorn outfit" alt="" />

// <HornedBeast title="Serious Jackson's Chameleon" img_url="https://imgc.allpostersimages.com/img/print/posters/dlillc-jackson-s-chameleon_a-G-13448768-14258384.jpg" keyword="Chameleon" description="This one is very serious." alt=""/>
  
// <HornedBeast title="Rhino Family" img_url="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" keyword="Rhino" description="Mother (or Father) rhino with two babies" alt="Parent rhino with two babies" />
  
// <HornedBeast title="Unicorn Head" img_url="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg" keyword="Unicorn" description="Someone wearing a creepy unicorn head mask" alt="A person wearing a creepy unicorn head mask" />

// <HornedBeast title="Basically a unicorn" img_url="https://i.pinimg.com/736x/b4/61/06/b46106830b841017ea59870b27ec18dc--narwhals-a-unicorn.jpg" keyword="Narwhal" description="A narwhal is basically a unicorn after all, right?" alt="" />

// <HornedBeast title="Baby Rhino" img_url="https://secure.img1-ag.wfcdn.com/im/17007094/resize-h800%5Ecompr-r85/3589/35892451/Baby+Rhino+Figurine.jpg" keyword="rhino" description="This is actually a figurine but it looks kinda real" alt="" />

// <HornedBeast title="Cera" img_url="https://vignette.wikia.nocookie.net/landbeforetime/images/c/c3/Cera_infobox.png/revision/latest?cb=20180422005003" keyword="triceratops" description="Three horns but still, horns. And who doesn't like The Land Before Time?" alt="" />

// <HornedBeast title="Narwhal costume" img_url="https://ae01.alicdn.com/kf/HTB18GwSQVXXXXaZaXXXq6xXFXXXh/Animal-Cosplay-Costume-Narwhal-Onesie-Mens-Womens-Cartoon-Whale-Pajamas.jpg" keyword="narwhal" description="A woman wearing a blue narwhal costume" alt="" />

    
// <HornedBeast title="#truth" img_url="https://i.pinimg.com/originals/16/cf/2a/16cf2a0b3fd51b9bee08bb6296193b75.jpg" keyword="narwhal" description="The truth behind narwhals" alt="" />

// <HornedBeast title="Rhino costume" img_url="https://www.shopmascot.com/image/cache/mascotnew/new196-800x800.jpg" keyword="rhino" description="Mascots have to get their costumes somewhere" alt="" />
      
// <HornedBeast title="Believe" img_url="https://www.tinselbox.com/wp-content/uploads/2018/03/I-BELIEVE-IN-UNICORNS-FREE-PRINTABLE-WATERCOLOR-7-of-1.jpg" keyword="unicorn" description="I believe in unicorns, do you?" alt="" />
      
// <HornedBeast title="Baby markhor" img_url="http://www.zooborns.com/.a/6a010535647bf3970b0223c84d5959200c-800wi" keyword="markhor" description="Even the babies are adorable" alt="" />
      
// <HornedBeast title="Markhor" img_url="https://wildlifeinformer.com/wp-content/uploads/2020/08/capra-ibex-large-horns.jpg"

// keyword="markhor" description="These wild goats eat snakes, then secrete a foam that locals fight over for the antivemon properties -- how cool is that?" alt="" />
            
// <HornedBeast title="Mouflon" img_url="https://images.unsplash.com/photo-1558560063-931ca9822a0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" keyword="mouflon" description="Those horns though" alt="" />

// <HornedBeast title="Addax" img_url="https://images.unsplash.com/photo-1556890077-020ec300d5db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80" keyword="addax" description="This guy is basically extinct but survives well in captivity, so they're frequently found in zoos" alt="" />

// <HornedBeast title="Baby mouflon" img_url="https://cbsnews3.cbsistatic.com/hub/i/r/2013/03/05/5b414225-a645-11e2-a3f0-029118418759/thumbnail/620x350/2d4cf24685b45c22912e64d2004fec8d/Baby_Mouflon_Wild_Sheep.jpg" keyword="mouflon" description="The cuteness that is a baby mouflon asleep" alt="" />
