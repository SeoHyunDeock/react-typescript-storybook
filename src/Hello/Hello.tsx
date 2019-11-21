import React from "react";

type HelloProps = {
  name: string;
  big?: boolean;
  onHello?: () => void;
  onBye?: () => void;
};

/** 
  안녕하세요라고 보여주고 싶을때 "Hello" 컴포넌트를 사용하세요.
*/

const Hello = ({ name, big, onHello, onBye }: HelloProps) => {
  return (
    <>
      {big ? <h1>안녕하세요, {name}</h1> : <p>안녕하세요, {name}</p>}
      <div>
        <button onClick={onHello}>Hello</button>
        <button onClick={onBye}>onBye</button>
      </div>
    </>
  );
};

Hello.defaultProps = {
  big: false
};

export default Hello;
