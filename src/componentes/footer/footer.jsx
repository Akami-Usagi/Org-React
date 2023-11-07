import "./footer.css"

function Footer(){
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png"}}>
        <div className='redes'>
            <a href='https://www.facebook.com/Akami.Usagi' target="blank"> 
                <img src="/img/facebook.png" alt="Facebook" />
            </a>
            <a href='https://twitter.com/Akami_Usagi' target="blank">
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.instagram.com/akami_usagi/' target="blank">
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado Camilo Arango</strong>
    </footer>
}

export default Footer