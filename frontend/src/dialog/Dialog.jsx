import React from 'react';
import './dialog.scss';
import { DoneOutline, Block } from '@mui/icons-material';

const Dialog = ({ success, error }) => {
    success = true;
    return (
        <div className="dialog">
            <div className="dialogWrapper">
                <div className="dialogTop">
                    {(success && (
                        <DoneOutline sx={{ color: 'var(--success-color)' }} />
                    )) ||
                        (error && (
                            <Block sx={{ color: 'var(--error-color' }} />
                        ))}
                </div>
                <div
                    className={`dialogBottom ${
                        (success && 'success') || (error && 'error')
                    }`}
                >
                    {(success && 'Happy!') || (error && 'Something is wrong!')}
                </div>
            </div>
        </div>
    );
};

export default Dialog;
