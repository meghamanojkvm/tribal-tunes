import QRCode from 'react-qr-code';
import React from 'react'

function QrComp(props) {
    console.log(props)
  return (
    <div>
        <QRCode
        value={props.url}
        size={256}
        bgColor='white'
        fgColor='black'
        viewBox={`0 0 256 256`}
        />
    </div>
  )
}

export default QrComp