var common = function () {
    return this.Init();
}

common.prototype = {
    Init: function (options) {
        this.RegisterEvent();
    },
    RegisterEvent: function () {
        debugger;
    },
    FormatBytes: function (bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';

        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(1024));

        return parseFloat((bytes / Math.pow(1024, i)).toFixed(decimals)) + ' ' + sizes[i];
    },
    GetFileIconHTML: function (file) {
        let result = '';

        if (file.extension == 'doc' || file.extension == 'docx') {
            result = `<img src="images/application/img-file-doc.svg" alt="img" class="img-fluid">`;
        } else if (file.extension == 'xls' || file.extension == 'xlsx') {
            result = `<img src="images/application/img-file-xls.svg" alt="img" class="img-fluid">`;
        } else if (file.extension == 'ppt' || file.extension == 'pptx') {
            result = `<img src="images/application/img-file-ppt.svg" alt="img" class="img-fluid">`;
        } else if (file.extension == 'pdf') {
            result = `<img src="images/application/img-file-pdf.svg" alt="img" class="img-fluid">`;
        } else if (file.extension == 'txt') {
            result = `<img src="images/application/img-file-txt.svg" alt="img" class="img-fluid">`;
        } else if (file.type.indexOf('image') >= 0) {
            result = `<img src="images/application/img-file-img.svg" alt="img" class="img-fluid">`;
        }

        return result;
    },
    UploadedFilesHTML: function (file) {
        if (file) {
            let fileName = file.name;
            let fileSize = file.size; // bytes
            let extension = file.extension;

            let fileHTML = `<div class="col-md-6 col-xl-3">
                              <div class="card">
                                <div class="card-body">
                                  <div class="d-flex">
                                    <div class="flex-shrink-0">
                                      ` + common.GetFileIconHTML(file) + `
                                    </div>
                                    <div class="flex-grow-1 mx-3">
                                      <h6 class="mb-1 d-grid"><span class="text-truncate w-100">` + fileName + `</span></h6>
                                      <p class="mb-0"><small>` + common.FormatBytes(fileSize) + `</small></p>
                                    </div>
                                    <div class="dropdown">
                                      <a
                                        class="avtar avtar-xs btn-link-secondary dropdown-toggle arrow-none"
                                        href="#"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        ><i class="material-icons-two-tone f-18">more_vert</i></a
                                      >
                                      <div class="dropdown-menu dropdown-menu-end">
                                        <a class="dropdown-item" href="#">Download</a>
                                        <a class="dropdown-item" href="#">Delete</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>`;

            return fileHTML;
        }

        return '';
    }
}
var common = common;
common.constructor = common;