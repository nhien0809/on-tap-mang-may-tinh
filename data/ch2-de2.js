// Chương 2 – Đề 2 (40 câu, 12-16-12). Nạp sau data/ch2.js.
// Quy ước như ch2.js: o[0] là đáp án đúng; câu có m = chọn nhiều đáp án (m = chỉ số các phương án đúng).
window.CHAPTERS.find((c) => c.id === 2).questions.push(
  // ===== NHẬN BIẾT (12) =====
  {
    l: 1,
    q: "Theo bài giảng, dịch vụ WWW có đặc điểm nổi bật nào?",
    o: [
      "Là dịch vụ có nhiều người dùng nhất trên Internet",
      "Chỉ hoạt động bên trong một mạng LAN của cơ quan",
      "Hoạt động mà không cần dùng tới giao thức nào",
      "Do nhà cung cấp dịch vụ Internet sở hữu toàn bộ"
    ],
    e: "WWW là dịch vụ có nhiều người dùng nhất trên Internet, là mạng lưới toàn cầu các website kết nối với nhau, giao thức chính là HTTP (HTTPS)."
  },
  {
    l: 1,
    q: "Một trang web được tạo thành từ những thành phần nào?",
    o: [
      "File HTML cùng ảnh, video, Java applet…",
      "Chỉ một file văn bản thuần không định dạng",
      "Các cookie lưu trên máy của người dùng",
      "Bản ghi DNS của tên miền chứa trang web"
    ],
    e: "Trang web = file HTML + ảnh + video + Java applet + … HTTP định nghĩa cách client tải trang web đó từ server."
  },
  {
    l: 1,
    q: "Mỗi dòng trong thông điệp HTTP được kết thúc bằng ký tự nào?",
    o: [
      "Carriage Return (CR) + Line Feed (LF)",
      "Chỉ ký tự Line Feed (LF)",
      "Dấu chấm phẩy (;) cuối dòng",
      "Ký tự rỗng NULL (00h)"
    ],
    e: "HTTP Request/Response là văn bản ASCII nhiều dòng, mỗi dòng kết thúc bởi CR (13h) + LF (10h); hai dấu xuống dòng liên tiếp đánh dấu kết thúc phần Header."
  },
  {
    l: 1,
    q: "Tên miền mã quốc gia (ccTLD) như “.vn”, “.jp” được quản lý như thế nào?",
    o: [
      "ICANN ủy quyền cho từng quốc gia tự quản lý",
      "ICANN trực tiếp quản lý toàn bộ các ccTLD",
      "Mỗi nhà cung cấp Internet tự đặt và quản lý",
      "Người dùng tự đăng ký mà không cần quản lý"
    ],
    e: "ccTLD gồm 2 ký tự, được ICANN ủy quyền cho từng quốc gia tự quản lý (ở Việt Nam là VNNIC)."
  },
  {
    l: 1,
    q: "Tên miền cấp cao nhất dùng chung “.edu” dành cho loại tổ chức nào?",
    o: [
      "Cơ sở giáo dục",
      "Cơ quan chính phủ",
      "Tổ chức thương mại",
      "Nhà cung cấp mạng"
    ],
    e: "“.edu” = education institution. “.gov” là chính phủ, “.com” là thương mại, “.net” là nhà cung cấp mạng."
  },
  {
    l: 1,
    q: "Với hộ gia đình, Local Name Server thường do ai vận hành?",
    o: [
      "Nhà cung cấp dịch vụ Internet (ISP)",
      "Tổ chức quản lý tên miền ICANN",
      "Các Root Name Server toàn cầu",
      "Chính trình duyệt trên máy người dùng"
    ],
    e: "Local Name Server được vận hành bởi mạng LAN của cơ quan, hoặc bởi ISP đối với hộ gia đình; nó thường lưu đệm (caching) kết quả truy vấn."
  },
  {
    l: 1,
    q: "Microsoft Outlook thuộc loại thành phần nào trong hệ thống thư điện tử?",
    o: [
      "User Agent cài đặt trên máy người dùng",
      "Webmail chạy trong trình duyệt web",
      "Mail server của nhà cung cấp dịch vụ",
      "Giao thức dùng để nhận thư về máy"
    ],
    e: "Phần mềm thư điện tử (User Agent) có hai loại: loại cài trên từng máy tính như Microsoft Outlook và loại Webmail."
  },
  {
    l: 1,
    q: "Giao thức SIP (Session Initiation Protocol) do tổ chức nào phát triển?",
    o: ["IETF", "ICANN", "IEEE", "ISO"],
    e: "SIP do IETF phát triển, dùng để khởi tạo, vận hành và kết thúc phiên làm việc đa phương tiện có nhiều người tham gia."
  },
  {
    l: 1,
    q: "Giao thức VoIP nào là một trong những giao thức đầu tiên và đang dần được thay thế bởi SIP?",
    o: ["H.323", "MGCP", "SRTP", "RTSP"],
    e: "H.323 là một trong những giao thức VoIP đầu tiên, đang dần được thay thế bởi SIP."
  },
  {
    l: 1,
    q: "Những giao thức nào sau đây dùng để NHẬN thư từ mail server về máy người dùng? (Chọn tất cả đáp án đúng)",
    o: ["POP3", "IMAP", "SMTP", "SIP"],
    m: [0, 1],
    e: "POP3 và IMAP4 là hai giao thức thông dụng để “kéo” thư về. SMTP dùng để “đẩy” (gửi) thư; SIP là giao thức khởi tạo phiên VoIP."
  },
  {
    l: 1,
    q: "Những định dạng nào sau đây là chuẩn NÉN ÂM THANH được nêu trong bài? (Chọn tất cả đáp án đúng)",
    o: ["MP3", "AAC", "H.264", "MP4"],
    m: [0, 1],
    e: "Chuẩn nén âm thanh: MP3, Vorbis, AAC, Opus. H.264 là chuẩn nén hình ảnh; MP4 là chuẩn ghép âm thanh và hình ảnh."
  },
  {
    l: 1,
    q: "Về lý thuyết, Streaming video độ phân giải cao (HD) yêu cầu tốc độ tối thiểu bao nhiêu?",
    o: ["5 Mbps", "2 Mbps", "9 Mbps", "25 Mbps"],
    e: "Về lý thuyết: video SD cần 2 Mbps, HD cần 5 Mbps, Ultra HD cần 9 Mbps."
  },

  // ===== THÔNG HIỂU (16) =====
  {
    l: 2,
    q: "Quá trình tương tác giữa client và web server diễn ra theo trình tự nào?",
    o: [
      "Người dùng thao tác → trình duyệt gửi yêu cầu → server gửi lại đối tượng",
      "Server tự gửi trang web → người dùng thao tác → trình duyệt xác nhận",
      "Trình duyệt gửi đối tượng → server gửi yêu cầu → người dùng thao tác",
      "Người dùng thao tác → server gửi yêu cầu → trình duyệt gửi đối tượng"
    ],
    e: "Tương tác bắt đầu bằng thao tác của người dùng trên trang web; browser gửi thông điệp HTTP yêu cầu dữ liệu; web server gửi lại thông điệp chứa đối tượng được yêu cầu."
  },
  {
    l: 2,
    q: "Nhược điểm của kiểu kết nối không liên tục (connectionless) trong HTTP/1.0 là gì?",
    o: [
      "Tốn thời gian thiết lập lại kết nối cho mỗi cặp thông điệp",
      "Không truyền được hình ảnh và video trong trang web",
      "Không thể sử dụng cookie để ghi nhớ trạng thái",
      "Bắt buộc phải mã hóa bằng SSL hoặc TLS"
    ],
    e: "HTTP/1.0 truyền xong một cặp Request-Response thì hủy kết nối, nên phải thiết lập lại kết nối nhiều lần, tốn thời gian."
  },
  {
    l: 2,
    q: "Phát biểu nào sau đây về cookie là <b>KHÔNG</b> đúng?",
    o: [
      "Do client tự tạo rồi gửi cho server lưu giữ",
      "Là file dữ liệu nhỏ, kích thước dưới 4KB",
      "Ghi nhớ thông tin trạng thái của người dùng",
      "Có thể là kẽ hở cho mã độc lợi dụng"
    ],
    e: "Cookie do SERVER gửi cho client. Lần sau client gửi request kèm cookie để server biết thiết lập trạng thái ra sao."
  },
  {
    l: 2,
    q: "Dòng “GET /index.html HTTP/1.1” thể hiện những thông tin gì của HTTP Request?",
    o: [
      "Phương thức, đối tượng yêu cầu và phiên bản HTTP",
      "Tên máy chủ, cổng kết nối và loại trình duyệt",
      "Mã trạng thái, ngày giờ và độ dài nội dung",
      "Loại dữ liệu chấp nhận và kiểu nén dữ liệu"
    ],
    e: "Request Line gồm phương thức (GET), đối tượng (/index.html) và phiên bản (HTTP/1.1). Tên máy chủ (Host), loại dữ liệu (Accept) nằm trong các Header."
  },
  {
    l: 2,
    q: "Cả SSL và TLS trong HTTPS đều dựa trên cơ chế nào?",
    o: [
      "Hạ tầng khóa công khai PKI – mã hóa không đối xứng",
      "Mã hóa đối xứng dùng chung một khóa bí mật cố định",
      "Truy vấn đệ quy tới các Root Name Server",
      "Chuyển mạch kênh dành riêng cho mỗi phiên"
    ],
    e: "HTTPS = HTTP + chứng chỉ mã hóa SSL hoặc TLS; cả hai đều dùng PKI (Public Key Infrastructure) – mã hóa không đối xứng."
  },
  {
    l: 2,
    q: "Vì sao cần hệ thống DNS dù các máy trên mạng vẫn liên lạc bằng địa chỉ IP?",
    o: [
      "Địa chỉ IP dài, khó nhớ; người dùng nhớ tên miền dễ hơn",
      "Địa chỉ IP thay đổi liên tục nên không thể dùng được",
      "Router chỉ hiểu tên miền, không hiểu địa chỉ IP",
      "DNS giúp mã hóa dữ liệu khi truy cập website"
    ],
    e: "Router chỉ hiểu địa chỉ IP, nhưng IP dài và khó nhớ, nên DNS chuyển tên miền người dùng gõ sang địa chỉ IP tương ứng (như danh bạ điện thoại)."
  },
  {
    l: 2,
    q: "Phát biểu nào đúng về cấu trúc tên miền?",
    o: [
      "Gồm các nhãn phân cách bởi dấu chấm, tổ chức theo hình cây",
      "Gồm các số thập phân phân cách bởi dấu chấm như địa chỉ IP",
      "Là một chuỗi phẳng, không phân cấp và không có gốc",
      "Gồm các cụm số hexa phân cách bởi dấu hai chấm"
    ],
    e: "Tên miền gồm một hoặc nhiều nhãn (label) phân cách bởi dấu chấm, có cấu trúc hình cây với gốc là root do ICANN quản lý."
  },
  {
    l: 2,
    q: "Khi Local Name Server hỏi Root Name Server về www.hnue.edu.vn, Root Name Server trả lời điều gì?",
    o: [
      "Địa chỉ Name Server quản lý các tên miền đuôi .vn",
      "Địa chỉ IP cuối cùng của máy chủ www.hnue.edu.vn",
      "Thông báo lỗi vì Root không biết tên miền này",
      "Địa chỉ của mail server thuộc tên miền hnue.edu.vn"
    ],
    e: "Root Name Server chỉ nắm thông tin bậc cao nhất: nó trả lại địa chỉ NS quản lý tên miền .vn; Local NS tiếp tục hỏi máy chủ .vn để có địa chỉ IP."
  },
  {
    l: 2,
    q: "Phát biểu nào đúng về cách SMTP truyền thư giữa mail server người gửi và người nhận?",
    o: [
      "Thiết lập kênh truyền trực tiếp, không qua mail server trung gian",
      "Chuyển thư qua nhiều mail server trung gian trên đường truyền",
      "Dùng kết nối UDP để gửi thư tới cổng 25 của người nhận",
      "Người nhận chủ động kéo thư từ mail server người gửi về"
    ],
    e: "SMTP đẩy thư từ client tới server, không dùng mail server trung gian; giữa mail server người gửi và người nhận phải thiết lập kênh truyền (TCP) trực tiếp."
  },
  {
    l: 2,
    q: "So sánh phiên làm việc của POP3 và IMAP, phát biểu nào đúng?",
    o: [
      "Phiên POP3 thường ngắn rồi tự ngắt; phiên IMAP duy trì đến khi người dùng thoát",
      "Phiên IMAP thường ngắn rồi tự ngắt; phiên POP3 duy trì đến khi người dùng thoát",
      "Cả hai đều duy trì phiên vô thời hạn cho tới khi tắt máy chủ",
      "Cả hai đều tự ngắt phiên ngay sau khi tải xong một bức thư"
    ],
    e: "Phiên POP3 chỉ duy trì trong thời gian ngắn rồi tự ngắt; phiên IMAP duy trì chừng nào người dùng chưa thoát, nên không tốn thời gian khởi động lại phiên."
  },
  {
    l: 2,
    q: "So với IPTV, nội dung thông tin trên OTT có đặc điểm gì?",
    o: [
      "Tự do, thiếu kiểm duyệt nhưng nhanh nhạy với thực tế",
      "Được giám sát, biên tập chặt chẽ trước khi phát",
      "Chỉ gồm các kênh truyền hình của nhà nước",
      "Chỉ phát được khi lắp thiết bị giải mã riêng"
    ],
    e: "Kênh IPTV được giám sát, biên tập; OTT tự do, thiếu kiểm duyệt, đôi khi không chính xác/khách quan nhưng nhanh nhạy với thực tế."
  },
  {
    l: 2,
    q: "Theo Điều 13 Luật Viễn thông (sửa đổi), doanh nghiệp viễn thông không có hạ tầng mạng (như OTT) có những nghĩa vụ nào? (Chọn tất cả đáp án đúng)",
    o: [
      "Đóng góp tài chính vào Quỹ Dịch vụ viễn thông công ích",
      "Chịu trách nhiệm về chất lượng dịch vụ đã công bố",
      "Bảo đảm giá dịch vụ đúng, đủ theo hợp đồng",
      "Tự xây dựng hạ tầng cáp quang riêng toàn quốc"
    ],
    m: [0, 1, 2],
    e: "Điều 13 yêu cầu doanh nghiệp không có hạ tầng mạng đóng góp vào Quỹ Dịch vụ viễn thông công ích, chịu trách nhiệm về chất lượng dịch vụ và bảo đảm giá đúng hợp đồng. Luật không bắt họ tự xây hạ tầng."
  },
  {
    l: 2,
    q: "So với điện thoại truyền thống, đặc điểm nào sau đây của điện thoại IP là <b>KHÔNG</b> đúng?",
    o: [
      "Phải lắp thêm đường dây điện thoại riêng",
      "Không phụ thuộc vào vị trí địa lý",
      "Gọi nội bộ được miễn phí",
      "Dễ dàng di chuyển tới vị trí mới"
    ],
    e: "Điện thoại IP KHÔNG phải lắp thêm đường dây điện thoại; nó kết nối qua cáp LAN, Wi-Fi hoặc 4G/5G."
  },
  {
    l: 2,
    q: "Phiên làm việc (cuộc gọi) của giao thức SIP hoạt động theo mô hình nào?",
    o: [
      "Client-Server",
      "Peer to Peer",
      "Broadcast",
      "Token Passing"
    ],
    e: "Phiên SIP theo mô hình Client-Server: client gửi yêu cầu tới server, server xử lý và trả lời. Lưu ý: giao thức độc quyền của Skype mới hoạt động theo kiến trúc Peer to Peer."
  },
  {
    l: 2,
    q: "Vì sao âm thanh và hình ảnh phải được nén (encode) trước khi Streaming?",
    o: [
      "Để giảm kích thước dữ liệu trước khi truyền",
      "Để người khác không xem được nội dung",
      "Để dữ liệu tự xóa sau khi xem xong",
      "Để chuyển dữ liệu sang dạng tín hiệu analog"
    ],
    e: "Âm thanh và hình ảnh được nén (encode) để giảm kích thước trước khi truyền; tới client các frame được giải mã (decode) và hiển thị."
  },
  {
    l: 2,
    q: "Những định dạng nào sau đây là chuẩn GHÉP âm thanh và hình ảnh được nêu trong bài? (Chọn tất cả đáp án đúng)",
    o: ["MP4", "WebM", "FLV", "VP9"],
    m: [0, 1, 2],
    e: "Chuẩn ghép âm thanh và hình ảnh: MP4, FLV, WebM, ASF, ISMA. VP9 là chuẩn nén hình ảnh."
  },

  // ===== VẬN DỤNG (12) =====
  {
    l: 3,
    q: "Một website bán hàng gồm phần giao diện khách hàng xem trên trình duyệt và phần xử lý đơn hàng chạy trên server. Hai phần này lần lượt gọi là gì?",
    o: [
      "Front-end và back-end",
      "Back-end và front-end",
      "Client và Data Center",
      "Web server và Name server"
    ],
    e: "Website thương mại điện tử thường có hai phần: front-end (phần giao diện phía người dùng) và back-end (phần ứng dụng chạy trên máy chủ)."
  },
  {
    l: 3,
    q: "Bạn gõ một tên miền vào trình duyệt lần đầu tiên. Trước khi gửi yêu cầu HTTP tới web server, máy tính phải làm gì?",
    o: [
      "Gửi truy vấn DNS để lấy địa chỉ IP của tên miền",
      "Gửi thư qua SMTP để thông báo cho web server",
      "Tải cookie từ Root Name Server về máy",
      "Thiết lập phiên SIP với web server"
    ],
    e: "Router chỉ hiểu địa chỉ IP, nên trình duyệt phải gửi DNS query tới Name Server để lấy địa chỉ IP rồi mới kết nối tới web server."
  },
  {
    l: 3,
    q: "Hai người trong cùng cơ quan lần lượt truy cập cùng một website cách nhau vài phút; lần sau phân giải tên miền nhanh hơn hẳn. Nguyên nhân hợp lý nhất là gì?",
    o: [
      "Local Name Server đã lưu đệm (caching) kết quả truy vấn",
      "Root Name Server đã ghi nhớ địa chỉ máy của người thứ hai",
      "Trình duyệt đã gửi cookie của người thứ nhất cho server",
      "HTTP/1.1 dùng chung kết nối cho cả hai người"
    ],
    e: "Local Name Server thường caching kết quả truy vấn, nên lần truy vấn sau cho cùng tên miền được trả lời ngay mà không phải hỏi lên Root."
  },
  {
    l: 3,
    q: "Khoa CNTT có trang fit.hnue.edu.vn. Theo cùng cấu trúc, trang của khoa Toán nên có tên miền nào?",
    o: [
      "math.hnue.edu.vn",
      "hnue.math.edu.vn",
      "math.edu.hnue.vn",
      "hnue.edu.vn.math"
    ],
    e: "Cấp thấp hơn đặt bên trái và phân cách bởi dấu chấm: math.hnue.edu.vn cùng cấu trúc với fit.hnue.edu.vn, mail.hnue.edu.vn."
  },
  {
    l: 3,
    q: "A dùng phần mềm thư trên máy để gửi email cho B; B đọc thư bằng phần mềm thư trên máy của mình. Trình tự nào mô tả đúng đường đi của bức thư?",
    o: [
      "Máy A → mail server A (SMTP) → mail server B (SMTP) → máy B (POP3/IMAP)",
      "Máy A → mail server B (POP3) → mail server A (SMTP) → máy B (IMAP)",
      "Máy A → máy B trực tiếp qua SMTP, không cần mail server",
      "Máy A → mail server A (IMAP) → máy B (SMTP) → mail server B"
    ],
    e: "SMTP “đẩy” thư tới mail server người gửi rồi tới mail server người nhận; B dùng POP3/IMAP “kéo” thư từ hộp thư về máy."
  },
  {
    l: 3,
    q: "Bạn đọc và soạn thư bằng Gmail ngay trên trình duyệt, không cài phần mềm thư. Giao thức nào được dùng giữa trình duyệt và mail server?",
    o: ["HTTP", "SMTP", "POP3", "SIP"],
    e: "Với Webmail, HTTP thực hiện cả việc đẩy thư lên mail server và kéo thư về; SMTP chỉ truyền thư giữa các mail server."
  },
  {
    l: 3,
    q: "Trường hợp nào sau đây là Livestream?",
    o: [
      "Tường thuật trực tiếp một trận đấu ngay khi đang diễn ra",
      "Xem lại một bộ phim đã có sẵn trên Netflix",
      "Tải trọn file video về máy rồi mới mở xem",
      "Nghe lại bản ghi âm bài giảng tuần trước"
    ],
    e: "Livestream tường thuật trực tiếp sự kiện ngay khi nó đang diễn ra (thời gian thực). Xem phim có sẵn là streaming tệp có từ trước; tải xong mới xem là Progressive Download."
  },
  {
    l: 3,
    q: "Một học sinh chỉ dùng mạng để gửi email, nghe nhạc trực tuyến và tìm kiếm Google. Theo khuyến nghị, mức tốc độ nào là đủ?",
    o: ["Khoảng 5 Mbps", "40 – 100 Mbps", "100 – 500 Mbps", "500 – 1000 Mbps"],
    e: "Mức khoảng 5 Mbps đáp ứng email cơ bản, stream nhạc, tìm kiếm Google. Các mức cao hơn dành cho video HD/UHD nhiều thiết bị, game nhiều người."
  },
  {
    l: 3,
    q: "Nhân viên làm việc tại nhà muốn nghe gọi số nội bộ của công ty ngay trên laptop. Giải pháp phù hợp là gì?",
    o: [
      "Cài phần mềm Softphone của hệ thống điện thoại IP",
      "Kéo thêm một đường dây điện thoại analog về nhà",
      "Đăng ký dịch vụ truyền hình IPTV của nhà mạng",
      "Cấu hình POP3 để nhận cuộc gọi qua email"
    ],
    e: "Điện thoại IP cho phép máy PC cài thêm Softphone để gọi qua mạng IP, không phụ thuộc vị trí, không cần lắp đường dây điện thoại."
  },
  {
    l: 3,
    q: "Khi gọi video nhóm bằng Zalo, cuộc gọi được truyền bằng công nghệ nào?",
    o: [
      "VoIP – truyền thoại qua mạng IP",
      "Chuyển mạch kênh analog truyền thống",
      "Truyền hình IPTV qua mạng riêng",
      "Giao thức SMTP truyền thư điện tử"
    ],
    e: "Hầu hết ứng dụng OTT (Zalo, Viber, Skype…) đều dùng công nghệ VoIP để truyền thoại qua mạng sử dụng TCP/IP."
  },
  {
    l: 3,
    q: "Một người muốn đọc thư trên nhiều thiết bị, phân loại thư vào thư mục và đánh dấu đã đọc. Những lựa chọn nào đáp ứng được? (Chọn tất cả đáp án đúng)",
    o: [
      "Dùng giao thức IMAP",
      "Dùng Webmail qua HTTP",
      "Dùng POP3 ở chế độ mặc định",
      "Dùng SMTP để nhận thư"
    ],
    m: [0, 1],
    e: "IMAP và Webmail (HTTP) đều hỗ trợ đánh dấu, phân loại, lưu trữ, tìm kiếm thư. POP3 mặc định xóa thư trên server và thiếu các tính năng này; SMTP không dùng để nhận thư."
  },
  {
    l: 3,
    q: "Người dùng mở trang https://hnue.edu.vn lần đầu trên trình duyệt. Những giao thức nào chắc chắn tham gia? (Chọn tất cả đáp án đúng)",
    o: [
      "DNS để phân giải tên miền",
      "HTTPS (HTTP + SSL/TLS)",
      "SMTP để gửi trang web về",
      "POP3 để tải nội dung trang"
    ],
    m: [0, 1],
    e: "Trình duyệt dùng DNS lấy địa chỉ IP rồi tải trang qua HTTPS (cổng 443). SMTP và POP3 là giao thức thư điện tử."
  }
);
