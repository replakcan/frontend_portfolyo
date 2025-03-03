import { useContext } from 'react'
import { LangContext } from '../contexts/LangContext'

const Footer = () => {
  const { data } = useContext(LangContext)

  return (
    <section className="footer-section dark:bg-gray-300">
      <div className="footer-container">
        <h1>{data.footer.title}</h1>
        <p>{data.footer.para}</p>
        <a>{data.footer.email}</a>
        <div className="socials">
          <a>
            <img src="./images/footer/twitter 1.png" alt="twitter icon" />
          </a>
          <a>
            <img src="./images/footer/codepen 1.svg" alt="codepen icon" />
          </a>
          <a>
            <img src="./images/footer/at-sign 1.svg" alt="e-mail icon" />
          </a>
          <a>
            <img src="./images/footer/instagram 1.svg" alt="instagram icon" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Footer
