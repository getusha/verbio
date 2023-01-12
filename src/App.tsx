import ListItem from './components/ListItem'

function App() {
  return (
    <div className="min-h-screen bg-neutral-900 grid center-center w-screen p-20 font-body text-lg">
      <div className="flex justify-center flex-col md:flex-row">
        <div className="flex-initial w-full md:w-2/5 flex flex-col justify-between">
          <h1 className="text-white font-display text-5xl">Text to speech</h1>
          <div className="w-100 bg-neutral-800 rounded-l-lg mb-5 p-4">
            <h4 className="text-2xl text-green-300">Commands</h4>
            <ul className="list-disc ml-10 text-white text-2xl md:text-2xl">
              <ListItem text='voice man' comment='change to man voice' />
              <ListItem text='voice woman' comment='change to woman voice' />
              <ListItem text='accent uk' comment='change to uk accent' />
              <ListItem text='accent us' comment='change to us accent' />
            </ul>
          </div>
        </div>
        <div className="flex-initial w-full md:w-3/5">
          <div className="h-full w-full border-2 bg-neutral-900 border-neutral-700 rounded-lg flex flex-col justify-between p-10">
            <div>
              <div className="text-white p-3 bg-slate-300 w-2/3 ml-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg m-2">
                <span>Hello can you pronounce this?</span>
              </div>
              <div className="text-white p-4 w-1/2 mr-auto rounded-full bg-neutral-900 border-2 border-neutral-800 m-2">
                <span>Hello can you pronounce this?</span>
              </div>
            </div>
            <div>
              <input type="text" placeholder="Type something..." className="outline-none rounded-md w-full mt-auto px-4 py-4 bg-neutral-800 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
