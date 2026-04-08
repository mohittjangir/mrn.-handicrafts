// MNR Handicrafts Premium Ecommerce Frontend

import { useState, useEffect } from "react"
import "./style.css"

const heroImages = [
"https://images.unsplash.com/photo-1549880338-65ddcdfd017b",
"https://images.unsplash.com/photo-1607083206968-13611e3d76db",
"https://images.unsplash.com/photo-1598300056393-4aac492f4344",
"https://images.unsplash.com/photo-1618220179428-22790b461013"
]

const products = [
]

export default function App(){

const [slide,setSlide] = useState(0)
const [cart,setCart] = useState([])
const [wishlist,setWishlist] = useState([])
const [view,setView] = useState(null)

useEffect(()=>{
const t=setInterval(()=>{
setSlide((p)=>(p+1)%heroImages.length)
},3000)
return()=>clearInterval(t)
},[])

function addCart(p){
setCart([...cart,p])
}

function toggleWish(id){
if(wishlist.includes(id)){
setWishlist(wishlist.filter(x=>x!==id))
}else{
setWishlist([...wishlist,id])
}
}

return(
<div>

<header className="nav">

<div className="logo">
🪔 <span>MNR Handicrafts</span>
</div>

<div>
<button>Home</button>
<button>Shop</button>
<button>Contact</button>
</div>

<div>
🛒 {cart.length}
</div>

</header>

<section className="hero">
<img src={heroImages[slide]} />

<div className="heroText fadeIn">
<h2>Luxury Handicrafts Sale</h2>
<p>Flat 20% OFF on Premium Handmade Items</p>
</div>

<div className="dots">
{heroImages.map((_,i)=>(
<span
key={i}
className={i===slide?"dot active":"dot"}
onClick={()=>setSlide(i)}
></span>
))}
</div>

</section>

<h2 className="sectionTitle">Featured Products</h2>

<section className="grid">

{products.map(p=>(

<div className="card" key={p.id}>

<img src={p.img[0]} onClick={()=>setView(p)} />

<h3>{p.name}</h3>

<div>
{"⭐".repeat(Math.round(p.rating))}
</div>

<p>₹{p.price}</p>

<div className="actions">

<button onClick={()=>addCart(p)}>
Add to cart
</button>

<button onClick={()=>toggleWish(p.id)}>
{wishlist.includes(p.id)?"❤️":"🤍"}
</button>

</div>

</div>
))}

</section>

{view && (
<div className="modal">

<div className="modalBox">

<h2>{view.name}</h2>

<img src={view.img[0]} />

<p>₹{view.price}</p>

<button onClick={()=>addCart(view)}>
Add to Cart
</button>

<button onClick={()=>setView(null)}>
Close
</button>

</div>

</div>
)}

<footer>
© 2026 MNR Handicrafts • Premium Handmade Store
</footer>

</div>
)
}
<section className="container">

<h2 className="sectionTitle">Featured Handicrafts</h2>

<div className="products">

{/* product cards here */}

</div>

</section>
