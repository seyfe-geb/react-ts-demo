import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ContainerComponent from './components/ContainerComponent';
import GreetComponent from './components/GreetComponent';
import HeadingComponent from './components/HeadingComponent';
import InputComponent from './components/InputComponent';
import OscarComponent from './components/OscarComponent';
import PersonComponent from './components/PersonComponent';
import PersonListComponent from './components/PersonListComponent';
import StatusComponent from './components/StatusComponent';
import Counter from './components/state/Counter';
import LoggedIn from './components/state/LoggedIn';
import User from './components/state/User';
import { ThemeContextProvider } from './components/context/ThemeContext';
import Box from './components/context/Box';



function App() {

  const personName = {
    first: 'Seyfegebriel',
    last: 'Mamo'
  }

  const persons = [
    {
      first: 'Deependra',
      last: 'Singh'
    },
    {
      first: 'Lalitha',
      last: 'Pothiraj'
    },
    {
      first: 'Seyfegebriel',
      last: 'Mamo'
    }
  ]

  return (
    <div className="App">
      <h1>Message Center</h1>
      <GreetComponent name='Deependra' messageCount={7} isLoggedIn={true}/>
      <PersonComponent name={personName}/>
      List of names
      <PersonListComponent names={persons} />

      Status component
      <StatusComponent status='error'/>

      <HeadingComponent>Some heading text!</HeadingComponent>

      <OscarComponent>
        <HeadingComponent>Oscar goes to Samuel L. Jackson!</HeadingComponent>
      </OscarComponent>

      Events - Button
      <ButtonComponent handleClick={(event, id) => {
        console.log('Clicked!', event, id)
        }}/>

      Events - Input
      <InputComponent value='' handleChange={(event) => {
        console.log('Input accepted', event)
      }}/>

      Styles
      <ContainerComponent styles={{border: '1px solid black', padding: '1rem'}}/>

      useState
      <LoggedIn />
      <User />

      useReducer <br />
      <Counter />

      useContext
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
