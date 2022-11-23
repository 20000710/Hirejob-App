import Image from 'next/image'
import React from 'react'
import peworldIcon from '../../assets/img/peworld.svg'


const Footer = () => {
  return (
    <>
    <style jsx>{`
        .footer{
            background-color: var(--purple);
            width:100%;
            height: 401px;
        }
        
        .footer span > img{
            width: 178px!important;
            height: 50px!important;
        }
        
        .footer-icon{
            padding-top: 4.375rem;
        }
        
        .footer-text p{
            font-weight: 400;
            font-size: 18px;
            color: var(--white)
        }
        
        .footer-text{
            margin-top: 1.875rem;
            width: 381px;
            height: 84px;
        }
        
        .footer hr{
            border: 1px solid #FFFFFF;
        }
        
        .footer .copyright{
            width: 281px;
            height: 28px;
            color: var(--white);
        }
        
        .footer .contact{
            width: 150px;
        }

        .footer .contact a,
        .footer .contact a:hover
        {
            text-decoration: none;
            color: var(--white);
        }
    `}</style>
    
    <div className="footer">
        <div className="container">
            <div className="footer-icon">
                <Image src={peworldIcon} alt="icon peworld"/>
            </div>
            <div className="footer-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
            </div>
            <hr/>
            <div className="last-side row justify-content-between">
                <div className="copyright">
                    <p>2020 Pewworld. All right reserved</p>
                </div>
                <div className="contact">
                    <a href="#" style={{marginRight: "1.5rem"}}>Telepon</a>
                    <a href="#">Email</a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer