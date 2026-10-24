window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
  id: 7,
  title: "Tầng Vật lý",
  topics: "Chuyển mạch kênh/gói · Băng thông · Nhiễu · Baseband/Broadband · Mã hóa · Cáp · Repeater, Hub, Modem",
  questions: [
    // ===== NHẬN BIẾT (12) =====
    {
      l: 1,
      q: "Chuẩn USB 2.0 có tốc độ truyền tối đa bao nhiêu?",
      o: ["480 Mbps", "12 Mbps", "5 Gbps", "127 Mbps"],
      e: "USB 2.0: tốc độ 480 Mbps, truyền nối tiếp, cáp tối đa 5 m, tối đa 5 hub nối tiếp và 127 thiết bị."
    },
    {
      l: 1,
      q: "Theo chuẩn USB 2.0, số thiết bị kết nối tối đa là bao nhiêu?",
      o: ["127 thiết bị", "5 thiết bị", "128 thiết bị", "255 thiết bị"],
      e: "USB 2.0 cho phép tối đa 127 thiết bị. Con số 5 là số hub nối tiếp tối đa (và chiều dài cáp 5 m)."
    },
    {
      l: 1,
      q: "Cổng HDMI có bao nhiêu chân?",
      o: ["19 chân", "15 chân", "24 chân", "9 chân"],
      e: "HDMI có 19 chân, truyền âm thanh và hình ảnh chất lượng cao (4K, 8K). VGA có 15 chân; DVI có 24 chân (+5 chân analog)."
    },
    {
      l: 1,
      q: "Thiết bị nào sau đây là DCE (thiết bị cuối kênh dữ liệu)?",
      o: ["Modem", "Laptop", "Smartphone", "Máy tính PC"],
      e: "DCE nối các DTE với đường truyền, ví dụ Modem, Hub, Multiplexer. Máy tính, smartphone là DTE (thiết bị đầu cuối của người dùng)."
    },
    {
      l: 1,
      q: "Kỹ thuật chuyển mạch kênh ban đầu được thiết kế cho hệ thống nào?",
      o: [
        "Hệ thống điện thoại",
        "Mạng Internet toàn cầu",
        "Mạng LAN Ethernet",
        "Mạng truyền hình cáp"
      ],
      e: "Chuyển mạch kênh ban đầu được thiết kế cho hệ thống điện thoại; ngày nay vẫn dùng trong PSTN, ISDN."
    },
    {
      l: 1,
      q: "Theo nghĩa miền tần số, băng thông (bandwidth) được đo bằng đơn vị nào?",
      o: ["Hz (Hertz)", "bps (bit/giây)", "Byte", "dB (decibel)"],
      e: "Băng thông là miền tần số mà đường truyền truyền được, đơn vị Hz. Theo cách hiểu thông dụng (tốc độ truyền) thì đơn vị là bit/giây."
    },
    {
      l: 1,
      q: "Ba nguyên nhân dẫn đến sự sai lệch tín hiệu là gì?",
      o: [
        "Suy giảm tín hiệu, méo do trễ lan truyền, nhiễu",
        "Xung đột, tắc nghẽn mạng và mất gói tin",
        "Suy giảm tín hiệu, xung đột và lặp vòng",
        "Nhiễu, tràn bộ đệm và sai thứ tự gói tin"
      ],
      e: "Ba nguyên nhân: sự suy giảm tín hiệu (attenuation), méo do trễ lan truyền (delay distortion) và nhiễu (noise)."
    },
    {
      l: 1,
      q: "Ethernet sử dụng kiểu mã hóa nào với mức điện áp ±0,85 V?",
      o: ["Manchester", "8b/10b", "64b/66b", "Điều tần FM"],
      e: "Ethernet dùng mã hóa Manchester (+0,85 V / −0,85 V). Gigabit Ethernet dùng 8b/10b; 10 Gigabit Ethernet dùng 64b/66b."
    },
    {
      l: 1,
      q: "Cáp đồng trục mảnh theo chuẩn 10Base2 có độ dài tối đa một đoạn là bao nhiêu?",
      o: ["200 mét", "500 mét", "100 mét", "2 km"],
      e: "10Base2 (thinnet, RG-58): 10 Mbps – Baseband – 200 m. 10Base5 (thicknet) là 500 m."
    },
    {
      l: 1,
      q: "Cặp dây xoắn chống nhiễu được Alexander Graham Bell phát minh vào năm nào?",
      o: ["Năm 1881", "Năm 1888", "Năm 1885", "Năm 1961"],
      e: "Bell phát minh cặp dây xoắn năm 1881 cho đường dây điện thoại (1885 sáng lập AT&T; 1888 là năm Strowger phát minh chuyển mạch tự động)."
    },
    {
      l: 1,
      q: "Modem sử dụng ba kỹ thuật điều chế cơ bản nào?",
      o: [
        "Điều biên, điều tần, điều pha",
        "Điều biên, mã hóa, nén dữ liệu",
        "Khuếch đại, tái tạo, phát lại",
        "Dồn kênh, phân kênh, định tuyến"
      ],
      e: "Modem điều chế bằng Điều biên (AM), Điều tần (FM), Điều pha (PM). Khuếch đại – tái tạo – phát lại là chức năng của Repeater."
    },
    {
      l: 1,
      q: "Cáp quang single mode dùng nguồn sáng nào và lõi có đường kính khoảng bao nhiêu?",
      o: [
        "Laser, khoảng 8 µm",
        "LED, khoảng 8 µm",
        "Laser, từ 50 µm trở lên",
        "LED, từ 50 µm trở lên"
      ],
      e: "Single mode dùng tia laser đơn sắc, lõi nhỏ khoảng 8 µm. Multimode dùng LED, yêu cầu lõi lớn từ 50 µm trở lên."
    },

    // ===== THÔNG HIỂU (16) =====
    {
      l: 2,
      q: "Đặc điểm nào sau đây là của chuyển mạch kênh?",
      o: [
        "Thiết lập kênh trước, băng thông cố định và dành riêng",
        "Không thiết lập kênh, các gói đi theo nhiều đường khác nhau",
        "Lưu tạm gói tin trong buffer trong khi chờ tìm kênh",
        "Tính cước phí theo số lượng gói tin đã truyền"
      ],
      e: "Chuyển mạch kênh: thiết lập đường truyền vật lý dành riêng trước khi truyền, băng thông cố định, tính cước theo thời gian. Ba phương án còn lại là của chuyển mạch gói."
    },
    {
      l: 2,
      q: "Phát biểu nào về chuyển mạch gói là <b>KHÔNG</b> đúng?",
      o: [
        "Cung cấp băng thông cố định, dành riêng",
        "Không cần thiết lập kênh trước khi truyền",
        "Khả năng dung lỗi cao hơn chuyển mạch kênh",
        "Tính cước phí theo số lượng gói tin"
      ],
      e: "Chuyển mạch gói KHÔNG cung cấp băng thông cố định (nên gặp khó khi truyền hình ảnh, âm thanh thời gian thực). Băng thông cố định là của chuyển mạch kênh."
    },
    {
      l: 2,
      q: "Vì sao chuyển mạch kênh gây lãng phí đường truyền?",
      o: [
        "Kênh song công nhưng giao tiếp của người chủ yếu bán song công",
        "Kênh bán song công nhưng giao tiếp của người chủ yếu song công",
        "Gói tin phải lưu tạm trong buffer của tổng đài quá lâu",
        "Mỗi gói tin đều phải mang đầy đủ địa chỉ của trạm đích"
      ],
      e: "Kênh truyền hiện nay 100% là full duplex (song công) và dành riêng cho cuộc truyền, trong khi đa số giao tiếp của con người là half duplex → lãng phí."
    },
    {
      l: 2,
      q: "Điểm khác biệt giữa chế độ truyền Baseband và Broadband là gì?",
      o: [
        "Baseband dùng toàn băng thông cho một tín hiệu; Broadband chia nhiều dải tần",
        "Baseband chia nhiều dải tần; Broadband dùng toàn băng thông cho một tín hiệu",
        "Baseband chỉ truyền tín hiệu analog; Broadband chỉ truyền tín hiệu số",
        "Baseband dành cho cáp quang; Broadband dành cho cáp xoắn đôi"
      ],
      e: "Baseband: tại mỗi thời điểm toàn bộ băng thông phục vụ một tín hiệu (dùng TDM). Broadband: chia băng thông thành nhiều dải tần, mỗi kênh một dải (dùng FDM)."
    },
    {
      l: 2,
      q: "Kỹ thuật dồn kênh nào gắn với chế độ truyền Baseband?",
      o: [
        "TDM – chia theo thời gian",
        "FDM – chia theo tần số",
        "CDMA – chia theo mã",
        "SDMA – chia theo không gian"
      ],
      e: "Baseband dùng TDM: chia thời gian thành các time slot và phân bổ xen kẽ các cuộc truyền. FDM gắn với Broadband."
    },
    {
      l: 2,
      q: "Vì sao cách mã hóa “điện áp cao = bit 1, 0 vol = bit 0” gây ra vấn đề?",
      o: [
        "Dễ nhầm bit 0 với trạng thái nghỉ không có điện áp",
        "Không biểu diễn được bit 1 trên dây dẫn điện",
        "Tốn quá nhiều mức điện áp khác nhau để mã hóa",
        "Chỉ dùng được khi truyền trên cáp quang"
      ],
      e: "Bit 0 (0 vol) dễ bị nhầm với trạng thái nghỉ (không có điện áp trên dây). Mã hóa Manchester khắc phục vấn đề này."
    },
    {
      l: 2,
      q: "Nhiễu xuyên âm (crosstalk) sinh ra do đâu?",
      o: [
        "Các dây cáp chạy gần nhau gây ảnh hưởng lẫn nhau",
        "Dao động nhiệt của các điện tử trong dây cáp",
        "Nhiều tần số khác nhau dùng chung một đường truyền",
        "Cường độ tín hiệu giảm dần theo khoảng cách"
      ],
      e: "Crosstalk là dạng đặc biệt của nhiễu điện từ, do các dây cáp chạy gần nhau trở thành nguồn nhiễu của nhau. Các phương án khác là nhiễu nhiệt, nhiễu điều chế, suy giảm tín hiệu."
    },
    {
      l: 2,
      q: "Nhiễu điều chế (intermodulation noise) xuất hiện khi nào?",
      o: [
        "Nhiều tần số khác nhau dùng chung một đường truyền",
        "Các điện tử trong dây cáp dao động do nhiệt độ",
        "Có sóng điện từ từ đài phát thanh, trạm BTS",
        "Các dây cáp chạy song song quá gần nhau"
      ],
      e: "Nhiễu điều chế: nhiều tần số dùng chung đường truyền nên tín hiệu nhận được là tổng, hiệu hoặc tích các tần số ban đầu."
    },
    {
      l: 2,
      q: "Các đôi dây trong cáp UTP được xoắn đều vào nhau nhằm mục đích chính là gì?",
      o: ["Chống nhiễu", "Tăng độ bền cơ học", "Giảm chi phí sản xuất", "Dễ phân biệt màu dây"],
      e: "4 đôi dây được bện vào nhau đều đặn để chống nhiễu (dây thẳng nhiễu = 4, dây xoắn cặp nhiễu ≈ 0 theo hình minh họa)."
    },
    {
      l: 2,
      q: "Phát biểu nào đúng về cáp STP so với cáp UTP?",
      o: [
        "Có thêm lớp bọc chống nhiễu nối đất, giá cao và khó lắp đặt hơn",
        "Không có lớp bọc chống nhiễu nên rẻ và dễ lắp đặt hơn",
        "Đang thống lĩnh thị trường cáp mạng LAN hiện nay",
        "Truyền dữ liệu bằng xung ánh sáng thay cho tín hiệu điện"
      ],
      e: "STP có thêm lớp giấy tráng kim loại chống nhiễu nối đất; giá cao hơn, to hơn, khó lắp đặt hơn UTP nên rất ít dùng. UTP mới thống lĩnh mạng LAN."
    },
    {
      l: 2,
      q: "Đặc điểm nào sau đây <b>KHÔNG</b> phải của cáp quang?",
      o: [
        "Dễ bị thu trộm tín hiệu từ xa",
        "Miễn nhiễm với nhiễu điện từ",
        "Độ suy hao tín hiệu rất thấp",
        "Không truyền điện nên không gây cháy"
      ],
      e: "Cáp quang KHÔNG thể bị thu trộm từ xa như cáp điện (cáp điện tạo từ trường xung quanh). Cáp quang miễn nhiễm nhiễu điện từ, suy hao thấp, không gây hỏa hoạn."
    },
    {
      l: 2,
      q: "So với nguồn sáng laser, nguồn sáng LED trong cáp quang có đặc điểm gì?",
      o: [
        "Rẻ hơn, ánh sáng nhiều tần số, truyền không xa",
        "Đắt hơn, ánh sáng đơn sắc, truyền rất xa",
        "Cho phép lõi nhỏ 8 µm, đặt được nhiều lõi",
        "Dùng cho cáp quang biển hàng ngàn km"
      ],
      e: "LED (multimode) rẻ, tia sáng tạp nhiều tần số nên dễ méo, chỉ truyền vài km. Laser đơn sắc, lõi 8 µm, dùng cho WAN hàng ngàn km."
    },
    {
      l: 2,
      q: "Repeater hoạt động như thế nào?",
      o: [
        "Nhận tín hiệu, tái tạo và khuếch đại rồi phát sang cổng kia",
        "Đọc địa chỉ MAC và gửi frame tới đúng cổng của trạm đích",
        "Chọn đường đi tốt nhất cho gói tin giữa các mạng khác nhau",
        "Chuyển tín hiệu số thành tín hiệu tương tự để truyền đi xa"
      ],
      e: "Repeater (bộ lặp) nhận tín hiệu từ một cổng, tái tạo, khuếch đại rồi phát lại vào cổng kia; nối 2 mạng giống nhau. Đọc MAC là Switch; chọn đường là Router; điều chế là Modem."
    },
    {
      l: 2,
      q: "Hạn chế của Hub là gì?",
      o: [
        "Phát gói tới mọi cổng, không điều phối được lưu lượng",
        "Chỉ gửi gói tới đúng cổng của trạm đích",
        "Định tuyến được giữa nhiều mạng khác nhau",
        "Tự học được địa chỉ MAC của các thiết bị"
      ],
      e: "Hub gửi gói tới tất cả các cổng còn lại (tăng xung đột), không điều phối lưu lượng nên trạm gửi và nhận phải cùng tốc độ."
    },
    {
      l: 2,
      q: "Cáp Cat 5 truyền 100 Mbps nhưng chỉ sử dụng những chân nào?",
      o: ["Chân 1, 2, 3, 6", "Chân 1, 2, 4, 5", "Chân 4, 5, 7, 8", "Cả 8 chân"],
      e: "Cat 5 có 4 đôi dây nhưng chỉ dùng 2 đôi (chân 1, 2, 3, 6). Cat 5e mới dùng toàn bộ 8 sợi để đạt 1 Gbps."
    },
    {
      l: 2,
      q: "Chức năng của DCE (Data Circuit Terminating Equipment) là gì?",
      o: [
        "Chuyển đổi tín hiệu dữ liệu sang dạng phù hợp với đường truyền",
        "Chạy các trình ứng dụng của người sử dụng cuối",
        "Lưu trữ dữ liệu cá nhân của người sử dụng",
        "Quản lý tên miền và cấp phát địa chỉ IP"
      ],
      e: "DCE nối DTE với đường truyền, chuyển đổi tín hiệu biểu diễn dữ liệu thành dạng đường truyền chấp nhận được và ngược lại. Ứng dụng người dùng nằm ở DTE."
    },

    // ===== VẬN DỤNG (12) =====
    {
      l: 3,
      q: "Kỹ thuật viên cần nối một máy tính với một Switch bằng cáp UTP. Nên bấm đầu cáp theo kiểu nào?",
      o: [
        "Bấm thẳng (straight through)",
        "Bấm chéo (cross over)",
        "Bấm chéo một đầu, đầu kia để trống",
        "Không cần bấm đầu, cắm trực tiếp"
      ],
      e: "PC và Switch là hai thiết bị khác loại (DTE nối DCE) nên bấm thẳng: đầu nhận của bên này là đầu gửi của bên kia."
    },
    {
      l: 3,
      q: "Hai máy tính cần nối trực tiếp với nhau bằng cáp UTP để chép dữ liệu. Nên bấm đầu cáp theo kiểu nào?",
      o: [
        "Bấm chéo (cross over)",
        "Bấm thẳng (straight through)",
        "Dùng cáp đồng trục 10Base2",
        "Dùng cáp USB 2.0 dài 10 m"
      ],
      e: "PC – PC là hai thiết bị cùng loại nên bấm chéo. (Cáp USB 2.0 tối đa chỉ 5 m.)"
    },
    {
      l: 3,
      q: "Một văn phòng cần kéo cáp xoắn đôi đạt chuẩn 10GBase-T (10 Gbps). Nên chọn loại cáp nào?",
      o: ["Cat 6", "Cat 5", "Cat 3", "Cat 5e"],
      e: "Cat 6 nâng tần số lên 250 MHz, đạt 10 Gbps (chuẩn 10GBase-T). Cat 5e chỉ 1 Gbps, Cat 5 là 100 Mbps, Cat 3 là 10 Mbps."
    },
    {
      l: 3,
      q: "Một hệ thống quy định 16 mức điện áp phân biệt. Mỗi tín hiệu biểu diễn được bao nhiêu bit?",
      o: ["4 bit", "16 bit", "8 bit", "2 bit"],
      e: "N bit được biểu diễn bằng một tín hiệu nếu có 2^N mức điện áp: 2^N = 16 → N = 4."
    },
    {
      l: 3,
      q: "Muốn mỗi tín hiệu biểu diễn được 3 bit thông tin thì cần quy định bao nhiêu mức điện áp phân biệt?",
      o: ["8 mức", "3 mức", "6 mức", "9 mức"],
      e: "Cần 2^N = 2³ = 8 mức điện áp. 6 là nhầm thành 2 × 3; 9 là nhầm thành 3²."
    },
    {
      l: 3,
      q: "Một nhà máy có nhiều động cơ công suất lớn gây nhiễu điện từ mạnh. Nên chọn loại đường truyền nào cho mạng?",
      o: ["Cáp quang", "Cáp UTP Cat 5", "Cáp đồng trục mảnh", "Sóng Wi-Fi"],
      e: "Cáp quang truyền bằng ánh sáng nên miễn nhiễm với nhiễu điện từ; cáp đồng và sóng vô tuyến đều chịu ảnh hưởng của EMI."
    },
    {
      l: 3,
      q: "Tuyến cáp nối Việt Nam với Singapore, Hong Kong, Nhật Bản dài hàng nghìn km dưới biển. Loại cáp quang và nguồn sáng phù hợp là gì?",
      o: [
        "Single mode, nguồn laser",
        "Multimode, nguồn LED",
        "Single mode, nguồn LED",
        "Multimode, nguồn laser"
      ],
      e: "Mạng WAN khoảng cách hàng ngàn km (cáp quang biển) dùng single mode với tia laser đơn sắc. LED chỉ truyền được vài km."
    },
    {
      l: 3,
      q: "Một kênh truyền có băng thông từ 400 Hz đến 4000 Hz. Tín hiệu có tần số 6000 Hz sẽ như thế nào khi truyền?",
      o: [
        "Bị suy hao rất cao, không truyền xa được",
        "Truyền tốt vì tần số càng cao càng nhanh",
        "Được tự động hạ xuống còn 4000 Hz",
        "Được khuếch đại để vừa với băng thông"
      ],
      e: "Những xung tín hiệu nằm ngoài băng thông có hệ số suy hao rất cao khiến tín hiệu không truyền xa được."
    },
    {
      l: 3,
      q: "Cần nối hai điểm cách nhau 800 m bằng cáp 10Base5 (tối đa 500 m/đoạn). Giải pháp ở tầng Vật lý là gì?",
      o: [
        "Dùng Repeater để khuếch đại tín hiệu",
        "Dùng Router để định tuyến gói tin",
        "Dùng Bridge để tách thành hai mạng",
        "Đổi sang cáp đồng trục 10Base2"
      ],
      e: "Tín hiệu suy hao theo khoảng cách; Repeater (thiết bị tầng Vật lý) khuếch đại để tín hiệu tới được chặng tiếp theo. 10Base2 chỉ 200 m, còn ngắn hơn."
    },
    {
      l: 3,
      q: "Hệ thống truyền hình cáp truyền nhiều kênh hình ảnh, âm thanh trên cùng một sợi cáp, mỗi kênh dùng một dải tần riêng. Đây là chế độ truyền nào?",
      o: [
        "Broadband với kỹ thuật FDM",
        "Baseband với kỹ thuật TDM",
        "Baseband với kỹ thuật FDM",
        "Broadband với kỹ thuật TDM"
      ],
      e: "Chia băng thông thành nhiều dải tần, mỗi kênh một dải → Broadband, dùng dồn/phân kênh theo tần số (FDM)."
    },
    {
      l: 3,
      q: "Trong cơn dông, sét đánh gần khu dân cư làm tín hiệu vô tuyến bị biến dạng. Đây là loại nhiễu nào?",
      o: [
        "Nhiễu điện từ (EMI)",
        "Nhiễu nhiệt",
        "Nhiễu xuyên âm",
        "Nhiễu điều chế"
      ],
      e: "Tia sét, đài phát thanh, trạm BTS, bão từ Mặt Trời là các nguồn nhiễu điện từ (EMI) làm biến dạng tín hiệu điện/sóng vô tuyến."
    },
    {
      l: 3,
      q: "Một doanh nghiệp so sánh hai gói dịch vụ: gói A tính cước theo thời gian kết nối, gói B tính theo lượng gói tin gửi đi. Hai gói lần lượt dựa trên kỹ thuật chuyển mạch nào?",
      o: [
        "A: chuyển mạch kênh; B: chuyển mạch gói",
        "A: chuyển mạch gói; B: chuyển mạch kênh",
        "Cả hai gói đều là chuyển mạch kênh",
        "Cả hai gói đều là chuyển mạch gói"
      ],
      e: "Chuyển mạch kênh tính cước theo thời gian sử dụng; chuyển mạch gói tính theo số lượng gói tin."
    }
  ]
});
