import type { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

//components
import Modal from '../components/Modal';

const Home: NextPage = () => {
  const [modal, setModal] = React.useState(true);

  return (
    <div>
      <button onClick={() => setModal(true)}>OpenModal</button>
      <Modal isOpen={modal} onClose={() => setModal(false)}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
        debitis quae commodi officiis possimus nisi, reprehenderit, quaerat
        doloribus error blanditiis totam obcaecati perferendis eligendi rem.
        Maxime corporis in corrupti debitis. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Eos debitis ipsum magni consequatur natus
        amet dolores sunt! Reprehenderit incidunt cumque vero nulla sed
        perspiciatis doloremque quis delectus harum! Dignissimos, id.
      </Modal>
    </div>
  );
};

export default Home;
