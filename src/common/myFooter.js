export default function MyFooter(){
    return(
        <footer>
            <div id="footer_container">
                <div id="copyrights">
                    © Natural Morons 2022. All rights reserved.
                </div>
                <div id="contacts">
                    <i onClick={() => window.open('https://www.instagram.com/natural_morons_official/')} className="fa fa-instagram" aria-hidden="true" title="instagram" id="inst_button"></i>
                    <i onClick={() => window.open('https://www.facebook.com/naturalmorons/')} className="fa fa-facebook-square" aria-hidden="true" title="facebook" id="face_button"></i>
                </div>
            </div>
        </footer>
    )
}