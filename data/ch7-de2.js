// Chương 7 – Đề 2 (40 câu, 12-16-12). Nạp sau data/ch7.js.
window.CHAPTERS.find((c) => c.id === 7).questions.push(
  // ===== NHẬN BIẾT (12) =====
  {
    l: 1,
    q: "Nội dung nào sau đây thuộc phạm vi quy định của tầng Vật lý?",
    o: [
      "Thuộc tính điện, cơ học của thiết bị, cáp và cổng nối",
      "Cách chọn đường đi tốt nhất cho gói tin",
      "Cách chuyển gói tin tới đúng tiến trình",
      "Cách phân giải tên miền sang địa chỉ IP"
    ],
    e: "Tầng Vật lý mô tả đặc trưng vật lý (kích thước, hình dạng thiết bị, cáp, cổng nối) và thuộc tính điện, cơ học để thiết bị liên kết được với nhau."
  },
  {
    l: 1,
    q: "Giắc cắm hình vuông có rãnh dùng cho cáp xoắn đôi trong mạng LAN có tên là gì?",
    o: ["RJ45", "VGA", "HDMI", "AUI"],
    e: "Giắc cắm hình vuông có rãnh của cáp xoắn là RJ45. AUI là cổng trên card mạng để nối cáp đồng trục dày qua Transceiver."
  },
  {
    l: 1,
    q: "Cổng VGA có cấu tạo như thế nào?",
    o: [
      "15 chân xếp thành 3 hàng song song",
      "19 chân, thường có màu đen",
      "24 chân số và 5 chân Analog",
      "4 chân tương ứng với 4 sợi cáp"
    ],
    e: "VGA: 15 chân, 3 hàng song song. HDMI: 19 chân. DVI: 24 chân + 5 chân Analog. USB 2.0: 4 chân."
  },
  {
    l: 1,
    q: "Theo chuẩn USB 2.0, chiều dài cáp tối đa là bao nhiêu?",
    o: ["5 m", "10 m", "100 m", "1 m"],
    e: "USB 2.0: cáp tối đa 5 m, tối đa 5 hub nối tiếp, 127 thiết bị, tốc độ 480 Mbps. 100 m là độ dài tối đa thường gặp của cáp xoắn."
  },
  {
    l: 1,
    q: "Trong cáp USB 2.0, chân số 1 với dây màu đỏ có chức năng gì?",
    o: ["Cấp nguồn (VCC)", "Data − (D−)", "Data + (D+)", "Nối đất (GND)"],
    e: "Chân 1 – đỏ – VCC (nguồn 5 V); chân 2 – trắng – D−; chân 3 – xanh lá – D+; chân 4 – đen – GND."
  },
  {
    l: 1,
    q: "Thiết bị chuyển mạch tự động trong hệ thống điện thoại được Almon B. Strowger phát minh vào năm nào?",
    o: ["Năm 1888", "Năm 1881", "Năm 1885", "Năm 1950"],
    e: "Ban đầu chuyển mạch làm thủ công; năm 1888 Strowger phát minh thiết bị chuyển mạch tự động. (1881 là năm Bell phát minh cặp dây xoắn.)"
  },
  {
    l: 1,
    q: "ADSL là viết tắt của cụm từ nào?",
    o: [
      "Asymmetric Digital Subscriber Line",
      "Advanced Digital Signal Link",
      "Analog Data Subscriber Line",
      "Asynchronous Digital Service Line"
    ],
    e: "ADSL = Asymmetric Digital Subscriber Line – đường dây thuê bao số bất đối xứng, tận dụng dải tần 25 kHz – 1,1 MHz của cáp điện thoại."
  },
  {
    l: 1,
    q: "Theo bài giảng, băng tần của mạng 5G nằm trong khoảng nào?",
    o: ["3,5 GHz – 6 GHz", "Dưới 2,6 GHz", "400 Hz – 4000 Hz", "25 kHz – 1,1 MHz"],
    e: "4G: dưới 2,6 GHz; 5G: 3,5 GHz – 6 GHz. 25 kHz – 1,1 MHz là dải tần ADSL dùng trên cáp điện thoại."
  },
  {
    l: 1,
    q: "Gigabit Ethernet sử dụng kiểu mã hóa nào thay cho Manchester?",
    o: ["8b/10b", "64b/66b", "Manchester", "NRZ"],
    e: "Ethernet dùng Manchester; Gigabit Ethernet dùng 8b/10b; 10 Gigabit Ethernet dùng 64b/66b."
  },
  {
    l: 1,
    q: "Loại cáp đồng trục RG-59 được dùng cho mục đích gì?",
    o: [
      "Truyền hình cáp, dùng Terminator 75 Ω",
      "Mạng 10Base2, dùng Terminator 50 Ω",
      "Mạng ARCnet, dùng Terminator 93 Ω",
      "Cáp quang biển quốc tế"
    ],
    e: "RG-59 dùng cho truyền hình cáp (Terminator 75 Ω); RG-62 dùng cho ARCnet (93 Ω); RG-58 là cáp thinnet 10Base2."
  },
  {
    l: 1,
    q: "Cáp đồng trục gồm những thành phần nào? (Chọn tất cả đáp án đúng)",
    o: [
      "Lõi truyền tín hiệu",
      "Lưới kim loại chống nhiễu",
      "Lớp chất cách điện",
      "Lớp phản quang (cladding)"
    ],
    m: [0, 1, 2],
    e: "Cáp đồng trục: lõi truyền tín hiệu, lưới kim loại chống nhiễu, lớp cách điện, vỏ bảo vệ. Lớp phản quang (cladding) là thành phần của cáp quang."
  },
  {
    l: 1,
    q: "Những giao thức, công nghệ nào sử dụng kỹ thuật chuyển mạch gói? (Chọn tất cả đáp án đúng)",
    o: ["TCP/IP", "X.25", "Frame Relay", "PSTN"],
    m: [0, 1, 2],
    e: "Chuyển mạch gói: TCP/IP, X25, Frame Relay, IPX/SPX, MPLS. PSTN (mạng điện thoại công cộng) dùng chuyển mạch kênh."
  },

  // ===== THÔNG HIỂU (16) =====
  {
    l: 2,
    q: "Trong chuyển mạch gói, phần Trailer (đuôi) của mỗi gói tin chứa gì?",
    o: [
      "Tín hiệu kết thúc gói và thông tin sửa lỗi (checksum)",
      "Địa chỉ máy gửi, máy nhận và số thứ tự gói",
      "Một phần của khối dữ liệu gốc ban đầu",
      "Bảng định tuyến của router trung gian"
    ],
    e: "Gói tin gồm Header (địa chỉ gửi/nhận, giao thức, số thứ tự), Data (một phần dữ liệu gốc) và Trailer (tín hiệu kết thúc gói, checksum)."
  },
  {
    l: 2,
    q: "Vì sao chuyển mạch gói gặp khó khăn khi truyền hình ảnh và âm thanh thời gian thực?",
    o: [
      "Vì không cung cấp đường truyền với băng thông cố định",
      "Vì phải thiết lập kênh riêng trước khi truyền",
      "Vì không thể chia dữ liệu thành các gói nhỏ",
      "Vì các gói luôn đi chung một tuyến cố định"
    ],
    e: "Chuyển mạch kênh cung cấp băng thông cố định; chuyển mạch gói thì không nên khó truyền hình ảnh, âm thanh thời gian thực."
  },
  {
    l: 2,
    q: "Thời điểm thường xảy ra tắc nghẽn ở chuyển mạch kênh và chuyển mạch gói lần lượt là khi nào?",
    o: [
      "Lúc thiết lập kênh; trong khi truyền các gói",
      "Trong khi truyền; lúc thiết lập kênh",
      "Lúc kết thúc cuộc gọi; lúc bắt đầu truyền",
      "Cả hai đều chỉ tắc nghẽn lúc kết thúc"
    ],
    e: "Chuyển mạch kênh dễ tắc nghẽn lúc khởi động cuộc truyền (thiết lập kênh); chuyển mạch gói tắc nghẽn trong khi truyền các gói."
  },
  {
    l: 2,
    q: "Tính “trong suốt” của đường truyền chuyển mạch kênh có nghĩa là gì?",
    o: [
      "Trạm đầu cuối dùng tốc độ, khuôn dạng tùy ý, tổng đài không can thiệp",
      "Tổng đài quy định tốc độ và khuôn dạng gói mà các trạm phải theo",
      "Mọi người đều đọc được nội dung đang truyền trên kênh",
      "Các gói tin có thể đi theo nhiều đường khác nhau"
    ],
    e: "Chuyển mạch kênh “trong suốt”: trạm gửi và nhận dùng bất kỳ tốc độ, khuôn dạng, cách tách khung nào; tổng đài không biết hoặc không can thiệp. Với chuyển mạch gói, các thông số do tổng đài quy định."
  },
  {
    l: 2,
    q: "Vì sao chuyển mạch gói thường chậm hơn chuyển mạch kênh?",
    o: [
      "Gói tin phải lưu tạm trong buffer chờ tìm kênh (store and forward)",
      "Gói tin phải đi qua tổng đài viên thao tác thủ công",
      "Chuyển mạch gói chỉ dùng được trên cáp đồng trục",
      "Mỗi gói phải chờ toàn bộ cuộc gọi kết thúc mới gửi"
    ],
    e: "Chuyển mạch gói store and forward – lưu tạm gói trong buffer khi chờ tìm kênh nên chậm; chuyển mạch kênh truyền bit liên tục trên dây dẫn vật lý nên nhanh."
  },
  {
    l: 2,
    q: "Throughput (thông lượng) của một đường truyền là gì?",
    o: [
      "Tốc độ truyền dữ liệu (bps hoặc packet/s), ít thông dụng hơn Bandwidth",
      "Miền tần số tín hiệu mà đường truyền truyền được (Hz)",
      "Thời gian tín hiệu đi hết chiều dài đường truyền",
      "Mức suy giảm cường độ tín hiệu theo khoảng cách"
    ],
    e: "Throughput (thông lượng) là tốc độ truyền dữ liệu của đường truyền (bps hoặc packet/s), ít thông dụng hơn Bandwidth hay Bit-rate."
  },
  {
    l: 2,
    q: "Méo do trễ lan truyền (delay distortion) xảy ra như thế nào?",
    o: [
      "Các thành phần tần số khác nhau đến đích ở các thời điểm khác nhau",
      "Cường độ tín hiệu giảm dần theo khoảng cách truyền",
      "Tín hiệu ngoại lai chèn vào tín hiệu gốc trên đường truyền",
      "Các dây cáp chạy gần nhau gây ảnh hưởng lẫn nhau"
    ],
    e: "Delay distortion: tín hiệu ứng với các tần số khác nhau đến đích ở những thời điểm khác nhau → lệch pha dữ liệu. Giảm theo khoảng cách là suy giảm; tín hiệu ngoại lai là nhiễu."
  },
  {
    l: 2,
    q: "Những nguồn nào sau đây gây ra nhiễu điện từ (EMI)? (Chọn tất cả đáp án đúng)",
    o: [
      "Đài phát thanh, đài truyền hình",
      "Trạm thu phát sóng di động BTS",
      "Bão từ Mặt Trời, tia sét",
      "Dao động nhiệt của điện tử trong cáp"
    ],
    m: [0, 1, 2],
    e: "Nguồn EMI: đài phát thanh, truyền hình, trạm BTS, tia sét, bão từ Mặt Trời. Dao động nhiệt của điện tử trong cáp gây nhiễu nhiệt."
  },
  {
    l: 2,
    q: "Lưới kim loại trong cáp đồng trục (tương tự lồng Faraday) có tác dụng gì?",
    o: [
      "Chống nhiễu điện từ từ bên ngoài",
      "Tăng tốc độ truyền lên 10 Gbps",
      "Phản xạ ánh sáng trở lại lõi cáp",
      "Cấp nguồn điện cho thiết bị đầu cuối"
    ],
    e: "Lưới kim loại bao quanh lõi có tác dụng chống nhiễu, giống nguyên lý lồng Faraday. Phản xạ ánh sáng là chức năng lớp cladding của cáp quang."
  },
  {
    l: 2,
    q: "Cáp Cat 5e đạt được tốc độ 1 Gbps (cao hơn Cat 5) chủ yếu nhờ đâu?",
    o: [
      "Sử dụng toàn bộ 8 sợi dây thay vì chỉ 2 đôi",
      "Nâng tần số truyền lên 250 MHz",
      "Thay dây đồng bằng sợi quang",
      "Bọc thêm lớp giấy tráng kim loại nối đất"
    ],
    e: "Cat 5 chỉ dùng 2 đôi (chân 1, 2, 3, 6); Cat 5e dùng toàn bộ 8 sợi để đạt 1 Gbps. Nâng tần số lên 250 MHz là Cat 6; lớp bọc kim loại là cáp STP."
  },
  {
    l: 2,
    q: "Vì sao lớp phản quang (cladding) của cáp quang phải có chiết suất thấp hơn lõi?",
    o: [
      "Để phản xạ ánh sáng trở lại vào trong lõi",
      "Để dẫn dòng điện song song với ánh sáng",
      "Để chống va đập và ẩm ướt cho sợi quang",
      "Để tăng số lượng màu sắc của tia sáng"
    ],
    e: "Cladding có chiết suất thấp hơn lõi để phản xạ ánh sáng trở lại vào trong. Chống va đập, ẩm ướt là nhiệm vụ của lớp phủ dẻo (buffer, coating)."
  },
  {
    l: 2,
    q: "Bộ chuyển đổi (converter) đi kèm cáp quang có nhiệm vụ gì?",
    o: [
      "Chuyển tín hiệu ánh sáng thành tín hiệu điện trước khi vào router",
      "Khuếch đại tín hiệu điện để truyền xa hơn trên cáp đồng",
      "Chia một sợi quang thành nhiều sợi cho các hộ gia đình",
      "Mã hóa dữ liệu theo chuẩn Manchester"
    ],
    e: "Converter chuyển tín hiệu ánh sáng thành tín hiệu điện trước khi vào router. Hộp chia (optical distribution frame) mới làm nhiệm vụ phân chia."
  },
  {
    l: 2,
    q: "Vì sao các thiết bị repeater di động xách tay tự lắp đặt trong nhà bị cơ quan chức năng xử lý?",
    o: [
      "Không được cấp phép và gây ảnh hưởng tới hoạt động của mạng viễn thông",
      "Vì làm tín hiệu di động trong nhà yếu đi rõ rệt",
      "Vì chỉ hoạt động được với cáp quang biển",
      "Vì định tuyến sai gói tin của các thuê bao khác"
    ],
    e: "Thiết bị không được cấp phép, mua xách tay rồi tự lắp; nó tăng tín hiệu cho thuê bao nhưng lại ảnh hưởng đến hoạt động của mạng viễn thông."
  },
  {
    l: 2,
    q: "Vì sao khi dùng Hub, trạm gửi và trạm nhận phải có cùng tốc độ?",
    o: [
      "Vì Hub không có khả năng điều phối lưu lượng đường truyền",
      "Vì Hub chỉ gửi gói tới đúng cổng của trạm đích",
      "Vì Hub tự học địa chỉ MAC của các thiết bị",
      "Vì Hub hoạt động ở tầng Mạng như router"
    ],
    e: "Hub không có khả năng điều phối lưu lượng nên trạm gửi và nhận phải cùng tốc độ, nếu không sẽ mất dữ liệu."
  },
  {
    l: 2,
    q: "Phát biểu nào sau đây về Modem là <b>KHÔNG</b> đúng?",
    o: [
      "Modem định tuyến gói tin giữa các mạng khác nhau",
      "Modem điều chế tín hiệu số thành tín hiệu tương tự",
      "Modem giải điều chế để tách lấy tín hiệu số",
      "Modem dùng các kỹ thuật điều biên, điều tần, điều pha"
    ],
    e: "Modem = Modulator–Demodulator: điều chế và giải điều chế tín hiệu (AM, FM, PM). Định tuyến gói tin là chức năng của Router."
  },
  {
    l: 2,
    q: "Theo bài giảng, Baseband thường được dùng cho loại cáp nào?",
    o: [
      "Đa số cáp mạng LAN (trừ cáp quang)",
      "Cáp truyền hình có nhiều kênh",
      "Chỉ dùng cho cáp quang biển",
      "Chỉ dùng cho sóng vô tuyến 5G"
    ],
    e: "Ví dụ Baseband: đa số cáp mạng LAN (trừ cáp quang). Cáp tivi nhiều kênh là ví dụ của Broadband."
  },

  // ===== VẬN DỤNG (12) =====
  {
    l: 3,
    q: "Kỹ thuật viên cần nối một Router với một Switch bằng cáp UTP. Theo bài giảng, nên bấm đầu cáp theo kiểu nào?",
    o: [
      "Bấm thẳng (straight through)",
      "Bấm chéo (cross over)",
      "Dùng cáp đồng trục 10Base5",
      "Dùng cáp USB 2.0"
    ],
    e: "Theo bài giảng, bấm thẳng dùng để nối hai thiết bị khác loại, ví dụ PC với Switch, Switch với Router."
  },
  {
    l: 3,
    q: "Cần nối một Hub với một Repeater bằng cáp UTP. Theo bài giảng, nên bấm đầu cáp theo kiểu nào?",
    o: [
      "Bấm chéo (cross over)",
      "Bấm thẳng (straight through)",
      "Bấm thẳng một đầu, đầu kia để trống",
      "Không cần bấm đầu cáp"
    ],
    e: "Bấm chéo dùng để nối 2 thiết bị cùng loại: PC–PC, PC–Router, Hub–Repeater, Bridge–Switch (theo bài giảng)."
  },
  {
    l: 3,
    q: "Một văn phòng muốn kéo cáp xoắn đôi đạt tốc độ 1 Gbps với chi phí thấp nhất. Loại cáp nào phù hợp?",
    o: ["Cat 5e", "Cat 5", "Cat 6", "Cat 3"],
    e: "Cat 5e đạt 1 Gbps (dùng đủ 8 sợi). Cat 5 chỉ 100 Mbps; Cat 6 đạt 10 Gbps nhưng đắt hơn; Cat 3 chỉ 10 Mbps."
  },
  {
    l: 3,
    q: "Ba tín hiệu A, B, C dùng chung một đường truyền bằng cách lần lượt chiếm các lát cắt thời gian xen kẽ A, B, C, A, B, C… Đây là kỹ thuật nào?",
    o: [
      "TDM – dồn kênh theo thời gian",
      "FDM – dồn kênh theo tần số",
      "Chuyển mạch kênh thủ công",
      "Mã hóa Manchester"
    ],
    e: "TDM chia thời gian thành các time slot và phân bổ xen kẽ các cuộc truyền vào dãy lát cắt liên tiếp (gắn với Baseband)."
  },
  {
    l: 3,
    q: "Nhiều đài phát thanh FM cùng phát trong không gian, mỗi đài dùng một tần số riêng. Đây là ví dụ của kỹ thuật nào?",
    o: [
      "FDM – dồn kênh theo tần số",
      "TDM – dồn kênh theo thời gian",
      "Chuyển mạch gói (packet)",
      "Truyền Baseband (băng hẹp)"
    ],
    e: "Mỗi kênh dùng một khoảng tần số (dải tần) riêng là dồn kênh theo tần số FDM (gắn với Broadband)."
  },
  {
    l: 3,
    q: "Một hệ thống quy định 64 mức điện áp phân biệt. Mỗi tín hiệu biểu diễn được bao nhiêu bit?",
    o: ["6 bit", "8 bit", "32 bit", "64 bit"],
    e: "2^N mức điện áp biểu diễn N bit: 2^N = 64 → N = 6."
  },
  {
    l: 3,
    q: "Muốn mỗi tín hiệu biểu diễn được 2 bit thông tin thì cần bao nhiêu mức điện áp phân biệt?",
    o: ["4 mức", "2 mức", "3 mức", "8 mức"],
    e: "Cần 2^N = 2² = 4 mức điện áp. 2 mức chỉ biểu diễn 1 bit; 8 mức biểu diễn 3 bit."
  },
  {
    l: 3,
    q: "Trường học cần kéo cáp quang khoảng 1 km giữa hai tòa nhà, ưu tiên chi phí thấp. Lựa chọn nào phù hợp?",
    o: [
      "Cáp multimode dùng nguồn sáng LED",
      "Cáp single mode dùng tia laser",
      "Cáp quang biển nhiều lớp bảo vệ",
      "Cáp đồng trục dày 10Base5"
    ],
    e: "LED (multimode) rẻ hơn, truyền được cỡ vài km – đủ cho 1 km. Laser single mode dùng cho khoảng cách hàng ngàn km, đắt hơn."
  },
  {
    l: 3,
    q: "Một máy in cần nối với máy tính cách 8 m bằng cáp USB 2.0. Nhận định nào đúng?",
    o: [
      "Vượt chiều dài cáp tối đa 5 m, cần dùng hub trung gian",
      "Hoàn toàn bình thường vì USB 2.0 cho phép tới 100 m",
      "Cần đổi sang cáp RJ45 bấm chéo để nối trực tiếp",
      "Cần bấm lại 4 chân cắm theo thứ tự ngược lại"
    ],
    e: "USB 2.0 cho phép cáp tối đa 5 m (tối đa 5 hub nối tiếp); 8 m vượt giới hạn nên cần hub trung gian."
  },
  {
    l: 3,
    q: "Kỹ thuật viên dùng cáp RG-59 của truyền hình cáp để nối mạng theo chuẩn 10Base2. Nhận định nào đúng?",
    o: [
      "Không đúng chuẩn, vì 10Base2 dùng cáp RG-58",
      "Đúng chuẩn, vì mọi cáp đồng trục đều giống nhau",
      "Đúng chuẩn, vì RG-59 chính là cáp thick net",
      "Không đúng chuẩn, vì 10Base2 dùng cáp quang"
    ],
    e: "10Base2 (thinnet) dùng cáp RG-58; RG-59 dùng cho truyền hình cáp với Terminator 75 Ω."
  },
  {
    l: 3,
    q: "Một văn phòng gần trạm phát sóng, cáp mạng phải chạy song song với nhiều đường dây khác. Những biện pháp nào giúp giảm nhiễu? (Chọn tất cả đáp án đúng)",
    o: [
      "Dùng cáp quang",
      "Dùng cáp xoắn có vỏ chống nhiễu STP",
      "Dùng cáp xoắn đôi thay vì dây thẳng",
      "Kéo cáp dài hơn chuẩn cho phép"
    ],
    m: [0, 1, 2],
    e: "Cáp quang miễn nhiễm EMI; STP có lớp bọc chống nhiễu nối đất; xoắn đôi giảm nhiễu so với dây thẳng. Kéo dài hơn chuẩn chỉ làm tín hiệu suy hao thêm."
  },
  {
    l: 3,
    q: "Khi một nút trên đường truyền bị hỏng giữa chừng, những nhận định nào đúng với mạng chuyển mạch gói? (Chọn tất cả đáp án đúng)",
    o: [
      "Các gói có thể đi theo đường khác",
      "Cuộc truyền không nhất thiết bị gián đoạn",
      "Các gói có thể tới đích sai thứ tự",
      "Cuộc truyền chắc chắn bị ngắt hoàn toàn"
    ],
    m: [0, 1, 2],
    e: "Mỗi gói đi riêng theo tuyến tốt nhất tại thời điểm đó nên có thể đổi đường, khả năng dung lỗi cao, nhưng có thể tới sai thứ tự. Bị ngắt hoàn toàn là đặc điểm của chuyển mạch kênh."
  }
);
