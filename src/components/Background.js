import React, { Component } from 'react';

export default class Background extends Component {
    render() {
        return (
            <div className="background">
                <div style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/img/main_bg.png)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100vh'
                }}>
                </div>
                <div className="subtitle">
                    <p>
                    잔에서 활짝 피어나는 봄<br />
                    싱그러움을 차 한잔으로 느껴보세요.
                    </p>
                </div>
            </div>
        );
    }
}

