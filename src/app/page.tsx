import Header from '../components/Header';
import HomePage from "../components/Home";


export default function Home() {
  return (
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center min-h-[100vh] overflow-hidden'>
    <Header />
    <HomePage />
  </div>
  );
}
