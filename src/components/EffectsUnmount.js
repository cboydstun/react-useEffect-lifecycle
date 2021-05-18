import React, {useState} from 'react'

import Counter from './Counter'

export default function EffectsDemoUnmount() {
  const [unmount, setUnmount] = useState(false);
  const renderDemo = () => !unmount && <Counter />;
  return (
    <div>
      <button onClick={() => setUnmount(true)}>Unmount child component</button>
      {renderDemo()}
    </div>
  );
}