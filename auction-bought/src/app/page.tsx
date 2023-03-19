import { Dosis } from 'next/font/google'
import styles from './page.module.css'
import MyForm from './components/form'
import dynamic from 'next/dynamic';
import Card, { CardProps } from './components/card';
import Link from 'next/link';


const inter = Dosis({ subsets: ['latin'] })

const DynamicComponent = dynamic(() => import('../app/components/form'), {
  ssr: false,
});


const Home: React.FC = () => {
  const CardProps: CardProps = {
    title: 'About',
    text: '',
  };

  return (
    <main className={styles.main}>
      <Link href="/">    
      <h1>HoneyBox</h1>
      </Link>
        
    <>
    <div className={styles.form}>
     < MyForm/>
     </div>

    </>

    <div className={styles.Card}> 
    
   <Card title="About" text="HoneyBox is the best way to search for coupons without the fear of properitary software!" />
    </div>

     </main> 
  )
}

export default Home;
