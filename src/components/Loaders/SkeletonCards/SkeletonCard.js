import React from 'react';
import './skeletoncard.css'

const SkeletonCard = () => {
    return (
        <div className="skeleton">
            <div className='skeleton_block_element'>
                <h4 className="skeleton-line"></h4>
                <div className='skeleton_block_img'>
                    <div className='skeleton-line skeleton_block'></div>
                    <div className='skeleton-line skeleton_block'></div>
                    <div className='skeleton-line skeleton_block'></div>
                    <div className='skeleton-line skeleton_block'></div>
                </div>
            </div>
            <div className='skeleton_block_element'>
                <div className='skeleton_block_text'>
                    <h4 className="skeleton-line"></h4>
                    <p className="skeleton-line"></p>
                </div>
                <div className='skeleton_block_text'>
                    <h4 className="skeleton-line"></h4>
                    <p className="skeleton-line"></p>
                </div>
                <div className='skeleton_block_text'>
                    <h4 className="skeleton-line"></h4>
                    <p className="skeleton-line"></p>
                </div>
            </div>
            <div className='skeleton_block_element'>
                <div className='skeleton_block_text'>
                    <h4 className="skeleton-line"></h4>
                    <p className="skeleton-line"></p>
                </div>
                <div className='skeleton_block_text'>
                    <h4 className="skeleton-line"></h4>
                    <p className="skeleton-line"></p>
                </div>
                <div className='skeleton_block_text'>
                    <h4 className="skeleton-line"></h4>
                    <p className="skeleton-line"></p>
                </div>
            </div>
            <div className='skeleton_block_element'>
                <div className='skeleton_block_text'>
                    <h4 className="skeleton-line"></h4>
                    <p className="skeleton-line"></p>
                </div>
                <div className='skeleton_block_text'>
                    <h4 className="skeleton-line"></h4>
                    <p className="skeleton-line"></p>
                </div>
            </div>
        </div>
    );
};

export default SkeletonCard;