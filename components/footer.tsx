import Container from './container';
import { EXAMPLE_PATH } from '../lib/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <div className="py-14 flex flex-col lg:flex-row items-center">
          <h3 className="text-xs font-semibold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Copyright &copy; {currentYear}{' '}
            <a
              href="https://bbima.ml"
              className="hover:text-sky-600"
              target="_blank"
              rel="noreferrer"
            >
              Banggi Bima
            </a>
          </h3>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
