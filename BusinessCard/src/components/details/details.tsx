import image from './../../assets/me.jpg';
import mail from './../../assets/Mail.svg';
import call from './../../assets/call.svg';
import styles from './details.module.css'

export default function Details() {
    return (
        <>
            <img src={image} width={350} height={400} className='rounded-top-4'/>
            <div className='px-4 mb-4'>
                <h3 className='pt-3'>Pruthvi Raju Peddigari</h3>
                <h6 className='text-warning'>Full Stack Developer</h6>
                <h6 className='fw-lighter'>pruthvirajudeveloper@outlook.com</h6>
                <div className='d-flex justify-content-around'>
                    <a href="mailto:pruthvirajudeveloper@outlook.com" className='btn btn-light px-3'><img src={mail} className='pe-1'></img>Email</a>
                    <a href="tel:+918919341850" className='btn btn-primary px-3'><img src={call} width={21} className={`pe-1 ${styles.call}`}></img>Call</a>
                </div>
            </div>
        </>
    );
}