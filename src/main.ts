import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>
      Todos
      <button id="purge">Purge</button>
    </h1>
    <ul id="todos">
      <li>
        <label>
          <input type="checkbox">
          <span>
            aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa 
          </span>
        </label>
        <button>Del</button>
      </li>
      <li>
        <label>
          <input type="checkbox">
          <span>
            aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa 
          </span>
        </label>
        <button>Del</button>
      </li>
    </ul>
    <form id="add-form">
      <input type="text">
      <button>Add</button>
    </form>
  </div>
`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
