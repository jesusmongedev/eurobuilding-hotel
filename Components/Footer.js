import { SiWhatsapp, SiInstagram, SiTwitter, SiFacebook } from 'react-icons/si'
import { MdSmartphone } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className="py-8 px-5 bg-primary text-white text-sm space-y-7 sm:flex sm:justify-around sm:items-center sm:space-y-0">
      <div className="space-y-2">
        <h3 className="text-md font-semibold">Contactos</h3>
        <ul className="space-y-3">
          <li>
            <a className="flex items-center gap-3" href="#">
              <SiWhatsapp className="text-xl" /> <span>+58-412-902.22.22</span>
            </a>
          </li>
          <li>
            <a className="flex items-center gap-3" href="#">
              <MdSmartphone className="text-xl" />{' '}
              <span>0800-EBHOTEL (3246835)</span>
            </a>
          </li>
          <li className="flex gap-3">
            <a href="#">
              {' '}
              <SiInstagram className="text-xl" />{' '}
            </a>
            <a href="#">
              {' '}
              <SiFacebook className="text-xl" />{' '}
            </a>
            <a href="#">
              {' '}
              <SiTwitter className="text-xl" />{' '}
            </a>
          </li>
        </ul>
      </div>
      <div className="space-y-2">
        <h3 className="text-md font-semibold">Recibe ofertas y descuentos</h3>
        <ul className="space-y-2">
          <li className="flex">
            <input
              className="bg-white rounded-l-sm px-2 text-black py-1 text-xs outline-none placeholder:text-gray-500"
              type="text"
              placeholder="Introduzca su email"
            />
            <button className="bg-secondary px-2 rounded-r-sm text-xs font-semibold uppercase">
              Suscribirse
            </button>
          </li>
          <li>
            <a href="#">Trabaja con nosotros</a>
          </li>
          <li>
            <a href="#">Terminos y condiciones del hotel</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
