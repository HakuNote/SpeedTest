import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Coin from './routes/Coin'
import Coins from './routes/Coin'
import Mui from './routes/Mui'
import SplitButton from './routes/SplitButton'
import MAlbum from './routes/MAlbum'
import Selection from './routes/Selection'
import Grd from './routes/Grd'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/grd'>
          <Grd />
        </Route>
        <Route path='/sel'>
          <Selection />
        </Route>
        <Route path='/alb'>
          <MAlbum />
        </Route>
        <Route path='/spb'>
          <SplitButton />
        </Route>
        <Route path='/mui'>
          <Mui />
        </Route>
        <Route path='/:coinId'>
          <Coin />
        </Route>
        <Route path='/'>
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
