import { injectGlobal } from 'emotion'
import Colors from './Colors'

injectGlobal`
  * {
    box-sizing: border-box;
  }
  
  html,
  body {
    height: 100%;
    position: relative;
    background-color: ${Colors.grey.light};
    margin: 0;
    padding: 0;
  }

`
