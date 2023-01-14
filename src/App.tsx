import React, { Ref, useEffect, useRef, useState } from 'react'
import ListItem from './components/list/ListItem'
import ListWrapper from './components/list/ListWrapper'
import useLoader from './hooks/useLoader'
import Loading from './components/loader/Loading';
import Container from './components/container/Container';
import Title from './components/text/Title';
import SenderMessage from './components/message/senderMessage';
import ResponseMessage from './components/message/responseMessage';
import Form from './components/form/Form';
import TextInput from './components/input/TextInput';

function App() {
  const isLoading = useLoader();
  const [senderInput, setSenderInput] = useState<string>("");
  const [senderInputs, setSenderInputs] = useState<string[]>([]);
  const [usingCommand, setUsingCommand] = useState<boolean>(false);

  const commands = ["voice man", "voice woman", "accent uk", "accent us"];

  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const onSumbitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setSenderInputs(prev => [...prev, senderInput]);
    setSenderInput("");
  }

  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenderInput(e.target.value);
  }

  useEffect(()=>{
    messagesContainerRef.current?.scrollTo({behavior: "smooth", top: messagesContainerRef.current.scrollHeight});
  }, [senderInputs]);

  useEffect(()=>{
    if(commands.includes(senderInput)){
      setUsingCommand(true);
    } else {
      setUsingCommand(false);
    }
  }, [senderInput])

  return (
    <React.Fragment>
      {isLoading && <Loading />}
      <Container>
        <div className="flex justify-center flex-col md:flex-row">
          <div className="flex-initial w-full md:w-2/5 flex flex-col justify-between">
            <Title text="Text to speech" />
            <div className="w-100 bg-neutral-800 rounded-l-lg mb-5 p-4">
              <h4 className="text-2xl text-green-300">Commands</h4>
              <ListWrapper>
                <ListItem text='voice man' comment='change to man voice' />
                <ListItem text='voice woman' comment='change to woman voice' />
                <ListItem text='accent uk' comment='change to uk accent' />
                <ListItem text='accent us' comment='change to us accent' />
              </ListWrapper>
            </div>
          </div>
          <div className="flex-initial w-full md:w-3/5 h-100">
            <div className="overflow-auto h-full w-full border-2 bg-neutral-900 border-neutral-700 rounded-lg flex flex-col justify-between p-10">
              <div ref={messagesContainerRef} className="h-96 overflow-auto">
                {senderInputs.map((sMessage: string)=>{
                  return <SenderMessage message={sMessage} />
                })}
                {/* <ResponseMessage /> */}
              </div>
              <div>
                <Form onSumbit={onSumbitHandler}>
                  <TextInput command={usingCommand} value={senderInput} onChange={onInputChangeHandler} type="text" placeholder="Type something..." />
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  )
}

export default App
