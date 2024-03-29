import { ChangeEvent, FC } from 'react';
import { useRecoilState } from 'recoil';

import userState from '@/stores/users';

interface TestProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Test: FC<TestProps> = (props) => {
  const { onChange } = props;
  const [currentUser, setCurrentUser] = useRecoilState(userState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // console.log('event ::::: ', event);
    setCurrentUser(event.target.value);

    if (onChange) onChange(event);
  };

  return (
    <div>
      <input
        data-testid="currentUserName"
        name="currentUserName"
        onChange={handleChange}
        value={currentUser}
      />
      <div data-testid="target">{currentUser}</div>
    </div>
  );
};

export default Test;
