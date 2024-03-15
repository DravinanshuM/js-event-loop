import React from 'react';
import './EventLoop.css';

 // Import the acorn library
 import { parse } from 'acorn';

const EventLoop = () => {

// Sample JavaScript code
const code = `
  console.log("hello world");
 
  let a = 100;
`;

// Parse the code using Acorn
const ast = parse(code, { ecmaVersion: 'latest' });
console.log(ast);

  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-lg-4 col-md-4 col-12'>
                <div className='row'>
                    {/* for button save and run */}
                    <div className='col-lg-12 col-md-12 col-12 mb-4 d-grid gap-2 d-md-flex justify-content-md-end'>
                        <button className='btn btn-md btn-success'>Save and Run</button>
                        <button className='btn btn-md btn-secondary'>Edit</button>
                    </div>
                    {/* code for text. */}
                    <div className='col-lg-12 col-md-12 col-12'>
                        <textarea className='form-control shadow-none' rows={17}  style={{overflow: "auto", resize: "none", backgroundColor: "#fbf1d3"}} placeholder='Write CODE...'></textarea>
                    </div>
                    {/* console API */}
                    <div className='col-lg-12 col-md-12 col-12 mt-3'>
                        <div className='console-API'>
                            <label className='form-label text-secondary p-2'>Console</label>
                            <div className='p-2' id='console-API'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-8 col-md-8 col-12'>
                <div className='row'>
                    <div className='col-lg-4 col-md-4 col-12'>
                        <div className='callStack'>
                            <label className='form-label text-secondary p-2'>Call Stack</label>
                            <div className='p-2' id='callStack'></div>
                        </div>
                    </div>  
                    <div className='col-lg-8 col-md-8 col-12'>
                        <div className='webApi'>
                            <label className='form-label text-secondary p-2'>Web APIs</label>
                            <div className='p-2' id='webApi'></div>
                        </div>
                    </div>  
                </div>
                {/* Event Loop */}
                <div className='row mt-3'>
                    <div className='col-lg-12 col-md-12 col-12'>
                        <i className="bi bi-arrow-counterclockwise fs-1" title='Event Loop'></i>
                    </div>
                </div>
                {/* Callback Queue */}
                <div className='row mt-3'>
                    <div className='col-lg-6 col-md-6 col-12'>
                         <div className='callBackQueue'>
                            <label className='form-label text-secondary p-2'>CallBack Queue</label>
                            <div className='p-2' id='callBackQueue'></div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-12'>
                         <div className='microTaskQueue'>
                            <label className='form-label text-secondary p-2'>MicroTask Queue</label>
                            <div className='p-2' id='microTaskQueue'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  );
}

export default EventLoop;
