import React, { useState, useEffect, useCallback } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import Tab from './Tab'
import Tab2Img from './../images/illustration-features-tab-2.svg'


function ModalComponent(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      toggle()
    }, 30000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} {...args} size='xl'>
        <ModalBody>
          <Tab title='A Simple Bookmark Manager' text='A clean and simple interface to organize your favourite websites. Open a new bowser tab and see your sites load instantly. Try it for free.' img={Tab2Img} />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalComponent;