import img1 from './src-images/logo1.jpg'
import img2 from './src-images/logo2.jpg'
import img3 from './src-images/logo3.jpg'
import img4 from './src-images/logo4.png'

const Home = () => {
    return (  
        <div className="home">

        <div id="home-img">
            <p> <br /><br /></p>
            <p id="home-img-txt-1">Hire the world-best</p>
            <p id="home-img-txt-2">Freelancers</p>
            <p id="home-img-txt-3">here, for any job you need.</p>
            <p id="home-img-txt-4">Tens of users used our FreeLanco website to hire freelancers to have their job done. Try it now!</p>
            <p> </p>
<button id="home-btn-1">Have your job done</button>
<button id="home-btn-2">Earn money now</button>

        </div>


<div id="trusted-by">
<p>Trusted by</p>
<img src={img1}  height="90" alt="xnx" />
<img src={img2}  height="90" alt="xnx" />
<img src={img3}  height="90" alt="xnx" />
<img src={img4}  height="90" alt="xnx" />

</div>
            <p>x</p>

        </div>

    );
}
 
export default Home;
