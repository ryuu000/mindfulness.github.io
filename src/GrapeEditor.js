import React, { useEffect } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';

const GrapeEditor = () => {
  useEffect(() => {
    const editor = grapesjs.init({
      container: '#gjs',
      fromElement: true,
      height: '100%',
      width: 'auto',
    });
  }, []);

  return <div id="gjs"></div>;
};

export default GrapeEditor;
