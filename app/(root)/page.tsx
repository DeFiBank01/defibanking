import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '../../banking/components/RightSidebar';

const Home = () => {
  const loggedIn = { firstName: 'Wolf '};

  return (
    <section className="home">
      <div className="home-content"
        <header className="home-header">
          <HeaderBox 
           type="greeting"
           title="Welcome"
           user={loggedIn?.firstName || 'Guest'} 
           subtext="Access and manage your business accounts transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[]}
    </section>
  )
}

export default Home