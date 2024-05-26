import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';

type Props = {
    videoUrl: string;
    title: string;
};

const CoursePlayer: FC<Props> = ({ videoUrl, title }) => {
    const [videoData, setVideoData] = useState({
        videoUrl: videoUrl,
    });

    useEffect(() => {
        setVideoData((prevState) => ({
            ...prevState,
            videoUrl: videoUrl,
        }));
    }, [videoUrl]);

    return (
        // <div
        //     style={{
        //         paddingTop: '41%',
        //         position: 'relative',
        //     }}>
        //     {videoUrl !== '' && (
        //         <iframe
        //             src={`${videoData.videoUrl}`}
        //             style={{
        //                 position: 'absolute',
        //                 top: 0,
        //                 left: 0,
        //                 width: '100%',
        //                 height: '100%',
        //                 border: 0,
        //             }}
        //             allowFullScreen></iframe>
        //     )}
        // </div>

        <div>
            <script src="https://fast.wistia.com/embed/medias/6gexd62acq.jsonp" async></script>
            <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
            <div
                className="wistia_responsive_padding"
                style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <div
                    className="wistia_responsive_wrapper"
                    style={{
                        height: '100%',
                        left: '0',
                        position: 'absolute',
                        top: '0',
                        width: '100%',
                    }}>
                    <div
                        className="wistia_embed wistia_async_6gexd62acq seo=true videoFoam=true"
                        style={{ height: '100%', position: 'relative', width: '100%' }}>
                        <div
                            className="wistia_swatch"
                            style={{
                                height: '100%',
                                left: '0',
                                opacity: '0',
                                overflow: 'hidden',
                                position: 'absolute',
                                top: '0',
                                transition: 'opacity 200ms',
                                width: '100%',
                            }}>
                            {videoUrl !== '' && (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    src={`${videoData.videoUrl}/swatch`}
                                    style={{
                                        filter: 'blur(5px)',
                                        height: '100%',
                                        objectFit: 'contain',
                                        width: '100%',
                                    }}
                                    alt=""
                                    aria-hidden="true"
                                    onLoad={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        const parent = target.parentNode as HTMLElement;
                                        parent.style.opacity = '1';
                                    }}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursePlayer;
