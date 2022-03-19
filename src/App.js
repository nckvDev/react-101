import './App.less';

// import Container from './components/Container';
import FormLogin from './components/FormLogin';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/page/homePage';
import Profile from './components/page/profile';
import PrivateRoute from './components/routes/privateRoute';
import CovidReport from './components/page/covidReport';
import News from './components/page/news'
import {  Result ,Button } from 'antd';
import { useHistory } from 'react-router';

function App() {
  const history = useHistory();
  const onClickLogout = () => {
    history.push('/');
  };
  return (
    <Switch>
      <Route component={FormLogin} path="/" exact />
      <PrivateRoute component={HomePage} path="/homepage" />
      <PrivateRoute component={Profile} path="/profile" />
      <Route component={CovidReport} path="/covid19" />
      <Route component={News} path="/news" />
      <Route path="*">
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={
            <Button type="primary" onClick={onClickLogout}>
              Back Home
            </Button>
          }
        />
      </Route>
    </Switch>
  );
}

export default App;
