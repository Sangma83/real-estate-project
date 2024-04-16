import logo from '../../../assets/logo.png';

const Footer = () => {
    return (
       <div>
         <footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
  
        <img className='w-1/6' src={logo} alt="" />
        <p className='text-xl -mt-10 text-blue-900 font-bold'>Maple<span className='text-orange-500'>Ridge</span></p>
    
    <p>Maple Ridge Industries Ltd.<br/>Providing reliable since 1998</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  
</footer>
<footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <aside>
    <p>Copyright © 2024 - All right reserved by Maple Ridge Industries Ltd</p>
  </aside>
</footer>
       </div>

    );
};

export default Footer;