import './App.css';
import './bootstrap.css'
import HomeScreen from './screens/HomeScreen';
import { ThemeProvider } from 'react-bootstrap';
import MobileApp from './mobile/MobileApp';

function App() {
  return (
    <>
       <ThemeProvider
       breakpoints={['xxl', 'xl', 'lg', 'md']}
       minBreakpoint='md'>
        <div className='d-none d-md-block d-lg-block d-xl-block d-xxl-block' >
          <HomeScreen/>
        </div>
       </ThemeProvider>
       {/* mobile */}
       <ThemeProvider
        breakpoints={['sm', 'xs', 'xxs']}
        minBreakpoint='xxs'>
        <div className='d-block d-md-none d-lg-none d-xl-none d-xxl-none'>
        <MobileApp/>
        </div>
       </ThemeProvider>
    </>
  );
}

export default App;
