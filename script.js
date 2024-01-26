var fileURL = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fgenk.vn%2Ftong-hop-cong-cu-trom-link-download-tai-cac-dich-vu-video-noi-tieng-20110304025149215.chn&psig=AOvVaw0HHmDW3IZfCxtEYl_c1l2L&ust=1698993221680000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOiopI3ZpIIDFQAAAAAdAAAAABAE';

document.getElementById('downloadButton').addEventListener('click', function() {
  
    var downloadLink = document.createElement('a');
    downloadLink.href = fileURL;
    downloadLink.download = 'file.pdf'; 
    downloadLink.style.display = 'none';

    document.body.appendChild(downloadLink);
    downloadLink.click();

    document.body.removeChild(downloadLink);
});
