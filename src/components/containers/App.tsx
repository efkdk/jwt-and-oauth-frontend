import { useState } from 'react';
import { Button } from '@/components/ui/button';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex gap-4 p-4">
        <p className="text-2xl font-bold ">Click the button!</p>
        <Button variant="default" onClick={() => setCount(count + 1)}>
          count is {count}
        </Button>
        <Button variant="link">Link</Button>
      </div>
    </>
  );
};

export default App;
