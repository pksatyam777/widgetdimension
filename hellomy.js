class VideoWidget {
    constructor(props) {
        this.props = props;
        this.container = props.container;
        this.createStyles();
        this.render();
    }
    createStyles() {
        const styleElement = document.createElement('style');
        styleElement.textContent = `
            body {
                display: 'block';
                margin: 0;
                padding: 0;
            }
            .video-widget-container {
                width: 865px;
                height: 300px;
            }
            .video-main-container {
                display: flex;
                padding: 0;
                background: white;
                width: 100%;
                height: 100%;
                border-radius: 16px;
                overflow: hidden;
            }
            .video-content {
                flex: 1;
                padding-top: 24px;
                padding-left: 24px;
                margin-right: 32px;
            }
            .video-container {
                border-radius: 0px 16px 16px 0;
                width: 100%;
                overflow: hidden;
            }
            .video-widget-heading {
                width: 144px;
                color: #000;
                font-size: 20px;
                font-style: normal;
                line-height: normal;
            }
            .video-container video::-webkit-media-controls {
                display: none !important;
            }
            .video-container video::-webkit-media-controls-enclosure {
                display: none !important;
            }
            .video-container video::-webkit-media-controls-panel {
                display: none !important;
            }
            @media (max-width: 768px) {
                .video-main-container {
                    display:block;
                    width:100%;
                    height:auto;
                }
                .video-widget-heading {
                    width:100%;
                    margin-bottom:24px;
                }
                .video-container {
                    border-radius : 0px;
                }
            }
        `;
        document.head.appendChild(styleElement);
    }
    render() {
        this.container.innerHTML = '';
        const mainContainer = document.createElement("div");
        mainContainer.className = "video-main-container";
        const contentContainer = document.createElement("div");
        contentContainer.className = "video-content";
        const title = document.createElement("h2");
        title.textContent = this.props.heading;
        title.className = 'video-widget-heading';
        contentContainer.appendChild(title);
        const videoContainer = document.createElement('div');
        videoContainer.className = 'video-container';
        // Create a video element and set its source
        const video = document.createElement('video');
        video.src = this.props.videoUrl;
        video.controls = true; // Add video controls
        video.autoplay = true; // Autoplay the video
        video.muted = true; // Ensure the video is muted for autoplay
        videoContainer.appendChild(video);
        mainContainer.appendChild(contentContainer);
        mainContainer.appendChild(videoContainer);
        this.container.appendChild(mainContainer);
    }
}
