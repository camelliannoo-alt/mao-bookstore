/* =========================================
	 1. CATEGORIES - DANH SÁCH THỂ LOẠI
========================================= */

const CATEGORIES = [
	{
		id: "truyen",
		name: "Truyện",
		description:
			"Những câu chuyện nuôi dưỡng trí tưởng tượng và thế giới nội tâm qua nhiều thế hệ bạn đọc thân thuộc. "
	},

	{
		id: "van-hoc",
		name: "Văn học",
		description:
			"Văn chương kinh điển Việt Nam và thế giới, những áng văn bất hủ vượt thời gian gợi mở chiều sâu nhân bản."
	},

	{
		id: "kinh-te-kinh-doanh",
		name: "Kinh tế – Kinh doanh",
		description:
			"Tri thức quản trị, tư duy thị trường và bài học khởi nghiệp chọn lọc dành cho những bộ óc đổi mới và kiến tạo."
	}
];


/* =========================================
	 2. HẰNG SỐ DÙNG CHUNG
========================================= */

// Ghi chú điều hướng dùng chung cho tất cả các sách
const BACK_NOTE =
	"Tìm hiểu câu chuyện và không gian Nhà sách Mão tại trang Giới thiệu.";


/* =========================================
	 3. BOOKS - DANH SÁCH SÁCH
	 Mỗi thể loại gồm 2 cuốn.
	 Lưu ý: `category` và `navigation.backCategory`
	 phải trùng đúng với `name` trong CATEGORIES.
========================================= */

const BOOKS = [

	// ---------------------------------------
	// THỂ LOẠI 1: TRUYỆN (2 CUỐN)
	// ---------------------------------------

	{
		// ==========================================
		// 1. THÔNG TIN CƠ BẢN CỦA SÁCH - DẾ MÈN PHIÊU LƯU KÝ
		// ==========================================
		id: "de-men-phieu-luu-ky",
		title: "Dế Mèn Phiêu Lưu Ký",
		author: "Tô Hoài",
		category: "Truyện",
		image: "images/books/de-men-phieu-luu-ky.jpg",
		color: "#D5A52D",

		description:
			"Dế Mèn trẻ khỏe, tự tin nhưng còn kiêu căng và nông nổi. Những sai lầm cùng các cuộc gặp gỡ trên đường phiêu lưu dần giúp chú biết nhận lỗi, trân trọng tình bạn và nghĩ đến người khác. Qua thế giới cỏ cây, loài vật gần gũi, Tô Hoài kể một câu chuyện trưởng thành mà trẻ em và người lớn đều có thể tìm thấy điều để suy nghĩ.",

		// ==========================================
		// 2. THÔNG TIN ẤN BẢN THAM KHẢO
		// ==========================================
		year: 1941,
		publisher: "Nhà xuất bản Kim Đồng",
		tag: ["Văn học thiếu nhi", "Hành trình trưởng thành"],
		status: "active",

		// ==========================================
		// 3. THÔNG TIN ĐIỀU HƯỚNG
		// ==========================================
		navigation: {
			backButton: "Quay lại danh mục sách",
			backCategory: "Truyện",
			note: BACK_NOTE
		},

		// ==========================================
		// 4. NỘI DUNG REVIEW CHI TIẾT
		// ==========================================
		review: [
			{
				heading: "I. Theo chân một chú dế còn nhiều nông nổi",

				paragraphs: [
					"Bờ cỏ, hang đất và mặt ao trong truyện Tô Hoài có đời sống riêng. Những con vật mang dáng vẻ và thói quen quen thuộc, rồi dần hiện ra như những nhân vật có tính nết, biết tự ái và biết kết bạn. Trẻ em có thể thích thú với các cuộc gặp gỡ ấy; người lớn đọc lại dễ nhận ra cả những thói xấu của mình.",

					"Dế Mèn trẻ khỏe, tự tin và thích thể hiện. Sự tự tin khiến chú có lúc coi thường những người yếu hơn. Tô Hoài để nhân vật mắc lỗi, chịu hậu quả và tự nhìn lại việc mình đã làm. Vì thế, quá trình trưởng thành của Dế Mèn có những đoạn khiến người đọc buồn, chứ không phải chuyến đi nào cũng chỉ có niềm vui.",

					"Theo dõi hành trình ấy, ta vừa muốn biết Dế Mèn sẽ đến đâu, vừa tò mò xem chú sẽ cư xử thế nào sau mỗi lần vấp váp. Nhân vật thay đổi qua những việc cụ thể, nhờ vậy câu chuyện tránh được cảm giác chỉ đang nhắc trẻ phải sống tốt."
				],

				// Hai ô nhận xét trong phần I
				callouts: [
					{
						title: "Biết nhận lỗi",
						content:
							"Dế Mèn có sức khỏe nhưng chưa biết cân nhắc hậu quả. Khi phải chịu trách nhiệm về hành động của mình, chú mới bắt đầu hiểu người khác cũng có nỗi sợ và sự tổn thương."
					},
					{
						title: "Chuyện loài vật rất gần chuyện con người",
						content:
							"Tô Hoài giữ những nét riêng của từng loài trong dáng điệu và cách sinh hoạt, đồng thời đưa vào đó tính cách con người. Bài học xuất hiện từ các cuộc gặp gỡ, va chạm trong truyện."
					}
				]
			},

			{
				heading: "II. Từ chuyện Dế Choắt đến tình bạn với Dế Trũi",

				paragraphs: [
					"Chuyện xảy ra với Dế Choắt khiến Dế Mèn phải đối diện với sự nông nổi của mình. Một hành động trêu chọc đã dẫn đến hậu quả mà chú không lường trước. Đoạn truyện này dễ để lại cảm giác day dứt: người gây ra tổn thương có thể xem việc mình làm là nhỏ, nhưng người khác lại phải chịu một hậu quả rất lớn.",

					"Qua những chuyến đi tiếp theo, Dế Mèn dần học cách sống cùng những người khác mình. Sức khỏe vẫn có ích, nhưng chú còn cần biết lắng nghe, biết sợ đúng lúc và can đảm đứng về phía người yếu. Tình bạn với Dế Trũi đem lại cảm giác có người cùng đi qua khó khăn, cùng chia sẻ và nhìn lại những lựa chọn.",

					"Cuốn sách cũng gợi người đọc nghĩ về cách sử dụng sức mạnh. Tính hiếu thắng khiến Dế Mèn dễ gây hại. Khi biết nghĩ đến người khác, chú có thể dùng chính sức mạnh ấy để giúp đỡ bạn bè và sống hòa hợp hơn với cộng đồng."
				],

				// Khung câu dẫn biên tập
				quote: {
					content:
						"Đi xa giúp Dế Mèn gặp thêm nhiều bạn; biết nhận lỗi mới giúp Dế Mèn lớn lên.",
					source:
						"Câu dẫn do nhóm biên soạn cho bài review, không phải lời trích nguyên văn của Tô Hoài."
				},

				// Đoạn văn sau khung câu dẫn
				paragraphsAfterQuote: [
					"Đọc lại khi đã lớn, người đọc có thể chú ý nhiều hơn đến những lần Dế Mèn thay đổi cách nhìn. Cùng một tình huống, trước kia chú dễ nghĩ đến bản thân; về sau, chú biết cân nhắc người khác sẽ phải chịu điều gì."
				]
			},

			{
				heading: "III. Đọc cùng trẻ, đọc lại khi đã lớn",

				paragraphs: [
					"Có thể đọc Dế Mèn phiêu lưu ký liền mạch để theo dõi chuyến đi, hoặc dừng sau từng phần để trò chuyện. Nếu đọc cùng trẻ, hãy thử hỏi vì sao Dế Mèn làm vậy, ai bị ảnh hưởng và liệu chú có cách xử lý nào khác. Trẻ có chỗ để nêu ý kiến, kể cả khi ý kiến ấy chưa giống cách người lớn hiểu.",

					"Một số từ ngữ và cách ứng xử mang dấu vết của thời kỳ tác phẩm ra đời có thể cần được giải thích thêm. Người lớn có thể cùng trẻ tìm nghĩa của từ, xem lại tình huống rồi tiếp tục câu chuyện."
				]
			}
		]
	},

	{
		// ==========================================
		// 1. THÔNG TIN CƠ BẢN CỦA SÁCH - CHO TÔI XIN MỘT VÉ ĐI TUỔI THƠ
		// ==========================================
		id: "cho-toi-xin-mot-ve-tuoi-tho",
		title: "Cho tôi xin một vé đi tuổi thơ",
		author: "Nguyễn Nhật Ánh",
		category: "Truyện",
		image: "images/books/cho-toi-xin-mot-ve-tuoi-tho.jpg",
		color: "#A58B70",

		description:
			"Cu Mùi và ba người bạn trở lại trong những trò chơi, câu hỏi và ước muốn của tuổi nhỏ. Nguyễn Nhật Ánh kể chuyện bằng giọng hài hước, xen vào đó là nỗi nhớ của người đã lớn. Cuốn sách gợi ta nhớ cách mình từng nhìn thế giới, rồi từ ký ức ấy hiểu thêm những cảm xúc và thắc mắc của trẻ em hôm nay.",

		// ==========================================
		// 2. THÔNG TIN ẤN BẢN THAM KHẢO
		// ==========================================
		year: 2008,
		publisher: "Nhà xuất bản Trẻ",
		tag: ["Ký ức tuổi thơ", "Tình bạn"],
		status: "active",

		// ==========================================
		// 3. THÔNG TIN ĐIỀU HƯỚNG
		// ==========================================
		navigation: {
			backButton: "Quay lại danh mục sách",
			backCategory: "Truyện",
			note: BACK_NOTE
		},

		// ==========================================
		// 4. NỘI DUNG REVIEW CHI TIẾT
		// ==========================================
		review: [
			{
				heading: "I. Thế giới của cu Mùi và những người bạn",

				paragraphs: [
					"Cu Mùi, Hải cò, Tủn và Tí sún có thể biến một ngày bình thường thành chuyện đáng kể. Các bạn nghĩ trò chơi, hỏi lại những điều người lớn coi là hiển nhiên rồi thử làm mọi thứ theo cách của mình. Những chuyện nhỏ ấy rất quan trọng với bọn trẻ, dù người ngoài nhìn vào có thể chỉ thấy nghịch ngợm.",

					"Tiếng cười thường đến từ cách trẻ con giải thích thế giới. Kinh nghiệm còn ít, trí tưởng tượng lại rộng, nên các nhân vật có những lý lẽ vừa ngây ngô vừa khiến người lớn khựng lại. Có những quy tắc ta đã quen làm theo đến mức quên mất lý do ban đầu.",

					"Nguyễn Nhật Ánh kể tuổi nhỏ từ khoảng cách của một người đã trưởng thành. Người đọc vừa nghe lại giọng nói hồn nhiên của trẻ con, vừa cảm thấy sự tiếc nuối của người biết quãng đời ấy đã qua. Những người bạn sau này có cuộc sống riêng, còn ký ức giữ lại cách họ từng ở bên nhau."
				],

				// Hai ô nhận xét trong phần I
				callouts: [
					{
						title: "Những lý lẽ khiến người lớn bật cười",
						content:
							"Các nhân vật nhỏ tuổi nhìn chuyện quen thuộc bằng kinh nghiệm của mình. Sự bất ngờ trong cách nghĩ, cách gọi tên làm nên nét hài hước của truyện."
					},
					{
						title: "Nhớ tuổi thơ để hiểu trẻ nhỏ hơn",
						content:
							"Người lớn có thể nhận ra mình cũng từng thắc mắc những điều tương tự. Cảm giác ấy giúp ta kiên nhẫn hơn trước câu hỏi và cảm xúc của trẻ em hôm nay."
					}
				]
			},

			{
				heading: "II. Những trò chơi và điều ta dễ quên khi lớn lên",

				paragraphs: [
					"Với bọn trẻ, một trò chơi có thể kéo dài chỉ vì vui. Một ý tưởng kỳ quặc đáng để thử vì nó khiến cả nhóm tò mò. Nhịp sống ấy khác với lúc trưởng thành, khi ta thường tính xem một việc có ích gì, mất bao lâu và liệu có đúng với những quy tắc đã quen.",

					"Tuổi thơ trong truyện vẫn có bất đồng, có lúc vụng về và không hiểu nhau. Chính những chuyện ấy giúp tình bạn trở nên cụ thể. Người đọc nhớ một quãng đời vì có ai đó đã cùng mình trải qua nó, từ trò chơi vui nhất đến những lần giận dỗi.",

					"Cuốn sách gợi ta chú ý đến cách lắng nghe trẻ. Khi trẻ gọi tên một sự vật theo cách khác hoặc đưa ra lý lẽ lạ lùng, người lớn thường muốn sửa ngay. Nếu chịu nghe thêm, có khi ta sẽ hiểu được điều trẻ đang lo hoặc điều khiến trẻ thích thú."
				],

				// Khung câu dẫn biên tập
				quote: {
					content:
						"Có những điều tuổi thơ giữ lại cho ta: khả năng ngạc nhiên trước một ngày rất bình thường.",
					source:
						"Câu dẫn do nhóm biên soạn cho bài review, không phải lời trích nguyên văn của Nguyễn Nhật Ánh."
				},

				// Đoạn văn sau khung câu dẫn
				paragraphsAfterQuote: [
					"Ta không thể trở lại nguyên vẹn những ngày còn bé. Nhưng đọc cuốn sách này, người lớn có thể nhớ rằng mình từng vui vì những việc rất đơn giản, từng dành nhiều thời gian cho bạn bè và từng đặt câu hỏi mà chẳng sợ bị cho là ngớ ngẩn."
				]
			},

			{
				heading: "III. Một cuốn sách có thể đọc rồi kể chuyện với nhau",

				paragraphs: [
					"Cho tôi xin một vé đi tuổi thơ hợp với người thích những câu chuyện đời thường và giọng kể gần gũi. Truyện thu hút bằng đối thoại, cách đổi góc nhìn và cảm giác hồi tưởng. Nếu quen đọc sách có nhiều biến cố dồn dập, người đọc có thể cần chậm lại một chút để cảm nhận nhịp kể.",

					"Đọc một mình dễ gợi lại ký ức riêng. Đọc rồi trò chuyện cùng bạn bè hoặc gia đình lại có cái vui khác: mỗi người nhớ một trò nghịch, một nỗi sợ hay một quy tắc hồi bé từng muốn thay đổi. Từ những chuyện ấy, người lớn và trẻ nhỏ có thể hiểu nhau thêm."
				]
			}
		]
	},


	// ---------------------------------------
	// THỂ LOẠI 2: VĂN HỌC (2 CUỐN)
	// ---------------------------------------

	{
		// ==========================================
		// 1. THÔNG TIN CƠ BẢN CỦA SÁCH - TRUYỆN KIỀU
		// ==========================================
		id: "truyen-kieu",
		title: "Truyện Kiều",
		author: "Nguyễn Du",
		category: "Văn học",
		image: "images/books/truyen-kieu.jpg",
		color: "#8C4A3F",

		description:
			"Truyện Kiều kể cuộc đời nhiều sóng gió của Thúy Kiều, người con gái tài sắc phải đối mặt với những lựa chọn đau đớn. Qua lời thơ lục bát giàu hình ảnh, Nguyễn Du bày tỏ lòng thương cảm với thân phận con người, nhất là người phụ nữ. Tác phẩm gợi người đọc suy nghĩ về tình yêu, chữ hiếu và khát vọng công lý.",

		// ==========================================
		// 2. THÔNG TIN ẤN BẢN THAM KHẢO
		// ==========================================
		// year: null nghĩa là chưa xác định; giao diện cần ẩn trường này khi null
		year: null,
		publisher: "Nhà xuất bản Trẻ",
		tag: ["Văn học cổ điển", "Truyện thơ Nôm"],
		status: "active",

		// ==========================================
		// 3. THÔNG TIN ĐIỀU HƯỚNG
		// ==========================================
		navigation: {
			backButton: "Quay lại danh mục sách",
			backCategory: "Văn học",
			note: BACK_NOTE
		},

		// ==========================================
		// 4. NỘI DUNG REVIEW CHI TIẾT
		// ==========================================
		review: [
			{
				heading: "I. Đọc câu chuyện, lắng nghe tâm trạng nhân vật",

				paragraphs: [
					"Theo dõi cuộc đời Thúy Kiều, người đọc đi qua nhiều biến cố, nhưng cũng có những lúc cần dừng lại ở một cảnh vật hoặc một lời đối thoại. Nguyễn Du diễn tả được niềm vui mới chớm, nỗi lo và sự giằng xé của một người phải chọn giữa những điều đều quý giá.",

					"Nhịp lục bát khiến nhiều câu thơ dễ nhớ. Cách chọn hình ảnh, dùng từ và chuyển giọng kể còn giúp diễn tả những cảm xúc khó nói trong ít dòng thơ. Có đoạn đọc lần đầu để hiểu chuyện, đọc lại mới chú ý đến nỗi niềm nhân vật chưa nói hết.",

					"Kiều có tình yêu và mong muốn riêng, có ý thức về phẩm giá ngay cả khi hoàn cảnh liên tục thu hẹp quyền lựa chọn của nàng. Sự cảm thương dành cho nhân vật vì thế đi cùng việc nhìn nhận nàng như một con người có đời sống nội tâm, thay vì chỉ nhớ đến những đau khổ nàng phải chịu."
				],

				// Hai ô nhận xét trong phần I
				callouts: [
					{
						title: "Thương nhân vật từ việc hiểu hoàn cảnh",
						content:
							"Những ràng buộc trong đời Kiều khiến nhiều lựa chọn trở nên khó khăn. Đọc kỹ hoàn cảnh giúp ta hiểu nỗi đau ấy trước khi phán xét hành động của nhân vật."
					},
					{
						title: "Tâm trạng hiện lên qua cảnh và lời",
						content:
							"Cảnh vật, nhịp thơ và đối thoại cùng diễn tả cảm xúc. Người đọc có thể cảm nhận sự bất an, hy vọng hay day dứt trong từng tình huống."
					}
				]
			},

			{
				heading: "II. Tài hoa, bạc mệnh và những lựa chọn không trọn vẹn",

				paragraphs: [
					"Kiều mong được sống theo tình cảm của mình, nhưng biến cố gia đình buộc nàng đứng trước những lựa chọn đau đớn. Khoảng cách giữa điều nàng mong muốn và điều nàng có thể thực hiện theo suốt câu chuyện, tạo nên nhiều giằng xé trong cuộc đời nhân vật.",

					"Trên những chặng đời tiếp theo, Kiều gặp sự lừa lọc, sức ép của quyền lực và đồng tiền. Để hiểu bi kịch ấy, cần nhìn cả hành động của từng người lẫn xã hội cho phép bất công xảy ra. Một quyết định riêng lẻ của Kiều không thể giải thích hết những gì nàng phải chịu.",

					"Những nhân vật khác đem đến các cách nhìn về tình yêu, lòng chung thủy, khát vọng công lý và cả sự chiếm hữu. Thế giới của tác phẩm có nhiều sắc độ. Đọc kỹ lời nói, hoàn cảnh và động cơ giúp người đọc hiểu nhân vật đầy đủ hơn trước khi đưa ra nhận xét."
				],

				// Khung trích dẫn từ tác phẩm
				quote: {
					content:
						"Đau đớn thay phận đàn bà,\nLời rằng bạc mệnh cũng là lời chung.",
					source:
						"Nguyễn Du, Truyện Kiều. Hai câu thơ thuộc tác phẩm trong phạm vi công cộng."
				},

				// Đoạn văn sau khung trích dẫn
				paragraphsAfterQuote: [
					"Lời thơ đưa nỗi đau của một người đến gần thân phận của nhiều người phụ nữ. Từ câu chuyện của Kiều, người đọc có thể tự hỏi người bị tổn thương có được lắng nghe, được trao quyền lựa chọn hay còn phải chịu thêm sự phán xét."
				]
			},

			{
				heading: "III. Nên bắt đầu đọc Truyện Kiều như thế nào?",

				paragraphs: [
					"Truyện Kiều hợp với cách đọc từng đoạn và đối chiếu chú giải khi gặp từ cổ hoặc điển tích. Người mới đọc có thể theo mạch truyện, tìm hiểu tâm trạng nhân vật trước, rồi quay lại chú ý đến cách dùng từ và hình ảnh. Không cần ép mình hiểu mọi lớp nghĩa ngay lần đầu.",

					"Tác phẩm đặt người đọc trước những câu hỏi về tình yêu, chữ hiếu, phẩm giá và bất công. Mỗi người có thể quan tâm đến một khía cạnh khác nhau. Một bài giới thiệu nên giúp người đọc bước vào câu chuyện và có điều muốn tìm hiểu tiếp, đồng thời dành chỗ cho cách cảm nhận riêng của họ."
				]
			}
		]
	},

	{
		// ==========================================
		// 1. THÔNG TIN CƠ BẢN CỦA SÁCH - TẮT ĐÈN
		// ==========================================
		id: "tat-den",
		title: "Tắt đèn",
		author: "Ngô Tất Tố",
		category: "Văn học",
		image: "images/books/tat-den.jpg",
		color: "#5E6B4E",

		description:
			"Tắt đèn là tiểu thuyết hiện thực phê phán tiêu biểu của nhà văn Ngô Tất Tố, phản ánh cuộc sống khốn khổ của người nông dân Việt Nam dưới chế độ sưu thuế hà khắc trước Cách mạng tháng Tám. Tác phẩm xoay quanh chị Dậu và gia đình, qua đó khắc họa những bất công của xã hội đương thời cũng như tình yêu thương, sự hy sinh và sức phản kháng mạnh mẽ của người phụ nữ trước hoàn cảnh cùng cực.",

		// ==========================================
		// 2. THÔNG TIN ẤN BẢN THAM KHẢO
		// ==========================================
		year: 1939,
		publisher: "Nhà xuất bản Văn học",
		tag: [
			"Văn học hiện thực",
			"Số phận người nông dân",
			"Giá trị nhân đạo"
		],
		status: "active",

		// ==========================================
		// 3. THÔNG TIN ĐIỀU HƯỚNG
		// ==========================================
		navigation: {
			backButton: "Quay lại danh mục sách",
			backCategory: "Văn học",
			note: BACK_NOTE
		},

		// ==========================================
		// 4. NỘI DUNG REVIEW CHI TIẾT
		// ==========================================
		review: [
			{
				heading: "I. Một gia đình nhỏ giữa vòng vây của sưu thuế",

				paragraphs: [
					"Trong Tắt đèn, Ngô Tất Tố đưa người đọc trở về làng quê Việt Nam dưới thời thực dân phong kiến, nơi cuộc sống của người nông dân bị bao phủ bởi đói nghèo, áp bức và những khoản sưu thuế nặng nề. Câu chuyện tập trung vào gia đình chị Dậu, một gia đình nghèo phải tìm mọi cách để có tiền nộp sưu, trong khi người chồng là anh Dậu đang ốm yếu và không còn đủ sức lao động.",

					"Điều khiến hoàn cảnh gia đình chị Dậu trở nên ngột ngạt không chỉ nằm ở cái nghèo, mà còn ở sự bất công của những quy định xã hội. Người nông dân dù đã kiệt quệ vẫn phải gánh chịu những nghĩa vụ vượt quá khả năng của mình. Khi không thể đáp ứng yêu cầu của bộ máy cai trị, họ phải đối mặt với sự đe dọa, đánh đập và những hình thức cưỡng ép tàn nhẫn.",

					"Ngô Tất Tố không xây dựng câu chuyện bằng những biến cố xa lạ hay những nhân vật phi thường. Ông lựa chọn một gia đình nông dân bình thường để cho thấy những bất công lớn lao có thể len lỏi vào từng bữa ăn, từng mái nhà và từng mối quan hệ gia đình. Chính sự gần gũi ấy khiến nỗi khổ của nhân vật trở nên chân thực. Người đọc không chỉ biết rằng họ nghèo, mà còn cảm nhận được sự bất lực khi những người thân yêu liên tục bị đẩy vào hoàn cảnh nguy hiểm.",

					"Chị Dậu hiện lên là một người phụ nữ giàu tình thương và có trách nhiệm với gia đình. Trước tình cảnh chồng đau ốm, con nhỏ thiếu thốn, chị phải liên tục tìm cách xoay xở để bảo vệ những người mình yêu thương. Những quyết định của chị không xuất phát từ mong muốn cá nhân mà từ nhu cầu sinh tồn của cả gia đình. Qua đó, tác phẩm cho thấy cuộc sống của người phụ nữ nghèo không chỉ bị giới hạn bởi điều kiện kinh tế mà còn bởi những áp lực xã hội mà họ gần như không có khả năng chống đỡ."
				],

				// Hai ô nhận xét trong phần I
				callouts: [
					{
						title: "Hiện thực xã hội được khắc họa chân thực",
						content:
							"Ngô Tất Tố phản ánh sự khốn cùng của người nông dân thông qua những tình huống đời thường nhưng đầy sức nặng. Sưu thuế, đói nghèo và sự áp bức không còn là những khái niệm xa vời mà trở thành những áp lực trực tiếp quyết định số phận của từng thành viên trong gia đình."
					},
					{
						title: "Tình thương gia đình trong nghịch cảnh",
						content:
							"Giữa những khó khăn chồng chất, chị Dậu vẫn dành mọi nỗ lực để bảo vệ chồng con. Tình cảm gia đình trở thành điểm tựa tinh thần giúp nhân vật giữ được sức mạnh và lòng kiên cường trước những biến cố."
					}
				]
			},

			{
				heading: "II. Chị Dậu – từ nhẫn nhịn đến sức phản kháng mạnh mẽ",

				paragraphs: [
					"Điểm đặc sắc trong quá trình xây dựng nhân vật của Ngô Tất Tố nằm ở sự chuyển biến trong cách ứng xử của chị Dậu. Ban đầu, chị hiện lên với sự nhẫn nhịn và cam chịu của một người phụ nữ nghèo đang cố gắng bảo vệ gia đình. Chị tìm cách van xin, giải thích và chấp nhận hạ mình trước những kẻ có quyền lực, chỉ mong chồng mình được yên ổn và không phải chịu thêm đau đớn.",

					"Tuy nhiên, sự nhẫn nhịn ấy không đồng nghĩa với việc chị không có giới hạn. Khi những lời van xin không còn tác dụng và anh Dậu tiếp tục bị hành hạ, chị buộc phải đứng lên bảo vệ chồng. Sự thay đổi trong thái độ của chị diễn ra tự nhiên từ chính tình thương và sự phẫn uất trước những hành động tàn nhẫn. Người phụ nữ vốn cố gắng nhẫn nhịn nay trở nên quyết liệt khi người thân bị đẩy đến bước đường cùng.",

					"Hình ảnh chị Dậu phản kháng lại cai lệ và người nhà lý trưởng là một trong những chi tiết nổi bật nhất của tác phẩm. Qua tình huống này, Ngô Tất Tố cho thấy sức mạnh tiềm ẩn của người phụ nữ nông dân. Khi bị dồn ép đến giới hạn, họ không còn chỉ là những con người cam chịu mà có thể đứng lên chống lại sự bất công để bảo vệ phẩm giá và những người mình yêu thương.",

					"Tuy vậy, sự phản kháng của chị Dậu cũng đặt ra một câu hỏi lớn: Một người phụ nữ phải chịu đựng đến mức nào mới có thể bảo vệ được gia đình mình? Sau tất cả những cố gắng, chị vẫn chưa thể thoát khỏi vòng vây của nghèo đói và áp bức. Điều đó cho thấy bi kịch của nhân vật không đơn thuần đến từ một vài cá nhân độc ác, mà còn bắt nguồn từ cả một cơ chế xã hội bất công.",

					"Bên cạnh giá trị hiện thực, tác phẩm còn thể hiện rõ tinh thần nhân đạo của Ngô Tất Tố. Nhà văn không nhìn người nông dân chỉ qua sự nghèo khổ mà còn trân trọng phẩm chất, tình cảm và sức sống của họ. Chị Dậu có thể yếu thế về địa vị và kinh tế, nhưng không hề yếu đuối trong tình thương và ý thức bảo vệ gia đình."
				],

				// Khung câu dẫn biên tập
				quote: {
					content:
						"Trong bóng tối của một xã hội bất công, tình thương gia đình vẫn có thể trở thành sức mạnh giúp con người đứng lên.",
					source:
						"Câu dẫn do nhóm biên soạn cho bài review, không phải lời trích nguyên văn của Ngô Tất Tố."
				},

				// Đoạn văn sau khung câu dẫn
				paragraphsAfterQuote: [
					"Đọc Tắt đèn, người đọc không chỉ thương cảm cho số phận của chị Dậu mà còn nhận ra sức mạnh của những con người bình thường khi bị đẩy vào hoàn cảnh khắc nghiệt. Chính sự đối lập giữa thân phận nhỏ bé và ý chí phản kháng mạnh mẽ đã tạo nên chiều sâu cho nhân vật, đồng thời khiến tác phẩm vẫn có sức lay động đối với nhiều thế hệ độc giả."
				]
			},

			{
				heading: "III. Đọc Tắt đèn để hiểu hơn về con người và xã hội",

				paragraphs: [
					"Tắt đèn là tác phẩm phù hợp với những độc giả muốn tìm hiểu văn học hiện thực Việt Nam giai đoạn trước Cách mạng tháng Tám. Tuy nhiên, giá trị của cuốn sách không chỉ nằm ở việc phản ánh một giai đoạn lịch sử. Tác phẩm còn mở ra những suy nghĩ về quyền sống, phẩm giá con người, tình cảm gia đình và sự bất bình đẳng trong xã hội.",

					"Khi đọc, người đọc có thể chú ý đến cách Ngô Tất Tố xây dựng các tình huống có tính xung đột cao. Những sự việc liên tiếp xảy ra khiến hoàn cảnh của gia đình chị Dậu ngày càng bế tắc. Nhịp truyện được đẩy lên qua các cuộc đối thoại, hành động và những va chạm giữa người dân nghèo với bộ máy cai trị. Nhờ vậy, sự bất công không chỉ được kể lại mà còn hiện lên trực tiếp qua từng tình huống.",

					"Ngôn ngữ của tác phẩm mang màu sắc đời sống nông thôn Việt Nam xưa, từ cách xưng hô đến lời ăn tiếng nói của từng nhân vật. Một số từ ngữ và bối cảnh có thể cần được tìm hiểu thêm đối với độc giả trẻ. Tuy nhiên, chính những chi tiết này cũng giúp người đọc hiểu hơn về đời sống, phong tục và quan hệ xã hội trong thời kỳ tác phẩm ra đời.",

					"Đọc cuốn sách trong bối cảnh hiện nay, ta có thể nhận ra rằng giá trị của một tác phẩm văn học không chỉ nằm ở câu chuyện được kể mà còn ở những vấn đề khiến người đọc tiếp tục suy nghĩ. Số phận chị Dậu gợi nhắc về tầm quan trọng của lòng nhân ái, sự công bằng và quyền được sống trong những điều kiện xứng đáng với phẩm giá con người.",

					"Tác phẩm phù hợp với học sinh, sinh viên muốn tìm hiểu văn học hiện thực phê phán Việt Nam, phân tích nhân vật, giá trị hiện thực và giá trị nhân đạo. Người yêu văn học Việt Nam có thể khám phá cách Ngô Tất Tố phản ánh đời sống nông thôn, xây dựng tình huống truyện và khắc họa tâm lý nhân vật. Những độc giả quan tâm đến lịch sử và xã hội Việt Nam cũng có thể hiểu thêm về đời sống người nông dân trước Cách mạng tháng Tám. Bên cạnh đó, bạn đọc yêu thích những câu chuyện về gia đình và con người có thể tìm thấy những suy ngẫm về tình thương, sự hy sinh, lòng kiên cường và sức phản kháng trước nghịch cảnh."
				]
			}
		]
	},


	// ---------------------------------------
	// THỂ LOẠI 3: KINH TẾ - KINH DOANH (2 CUỐN)
	// ---------------------------------------

	{
		// ==========================================
		// 1. THÔNG TIN CƠ BẢN CỦA SÁCH - TỪ TỐT ĐẾN VĨ ĐẠI
		// ==========================================
		id: "tu-tot-den-vi-dai",
		title: "Từ Tốt Đến Vĩ Đại",
		author: "Jim Collins",
		category: "Kinh tế – Kinh doanh",
		image: "images/books/tu-tot-den-vi-dai.jpg",
		color: "#3F5E7A",

		description:
			"Từ Tốt Đến Vĩ Đại nghiên cứu cách những doanh nghiệp đang hoạt động tốt có thể tạo ra bước phát triển vượt trội và duy trì thành công trong thời gian dài. Thông qua việc phân tích các doanh nghiệp thực tế, Jim Collins đề cập đến những yếu tố quan trọng như năng lực lãnh đạo, xây dựng đội ngũ, văn hóa doanh nghiệp, tính kỷ luật và chiến lược phát triển. Cuốn sách cung cấp góc nhìn về quản trị và cách xây dựng một tổ chức có khả năng phát triển bền vững.",

		// ==========================================
		// 2. THÔNG TIN ẤN BẢN THAM KHẢO
		// ==========================================
		year: 2001,
		publisher: "Nhà xuất bản Trẻ",
		tag: [
			"Quản trị doanh nghiệp",
			"Lãnh đạo",
			"Phát triển bền vững"
		],
		status: "active",

		// ==========================================
		// 3. THÔNG TIN ĐIỀU HƯỚNG
		// ==========================================
		navigation: {
			backButton: "Quay lại danh mục sách",
			backCategory: "Kinh tế – Kinh doanh",
			note: BACK_NOTE
		},

		// ==========================================
		// 4. NỘI DUNG REVIEW CHI TIẾT
		// ==========================================
		review: [
			{
				heading: "I. Không phải doanh nghiệp tốt nào cũng có thể trở nên vĩ đại",

				paragraphs: [
					"Trong kinh doanh, việc xây dựng một doanh nghiệp hoạt động ổn định và đạt được những kết quả tích cực đã là một thành tựu đáng kể. Tuy nhiên, duy trì kết quả tốt trong một thời gian dài và tạo ra sự phát triển vượt trội lại là một thử thách hoàn toàn khác. Đây chính là vấn đề mà Jim Collins đặt ra trong Từ Tốt Đến Vĩ Đại.",

					"Thay vì chỉ đưa ra những lời khuyên chung về cách kinh doanh thành công, tác giả bắt đầu từ một câu hỏi cụ thể: Vì sao một số doanh nghiệp có thể chuyển mình từ mức hoạt động tốt sang mức xuất sắc bền vững, trong khi nhiều doanh nghiệp khác dù có điều kiện thuận lợi vẫn không thể đạt được bước tiến tương tự?",

					"Để tìm lời giải, Jim Collins cùng nhóm nghiên cứu tiến hành phân tích và so sánh các doanh nghiệp có quá trình phát triển nổi bật với những doanh nghiệp tương đồng nhưng không đạt được kết quả tương tự. Cách tiếp cận dựa trên dữ liệu và nghiên cứu trường hợp thực tế giúp cuốn sách không chỉ dừng lại ở việc kể về những câu chuyện thành công mà còn tìm kiếm những yếu tố có tính hệ thống đứng phía sau kết quả đó.",

					"Một trong những nội dung đáng chú ý là khái niệm lãnh đạo cấp độ 5 (Level 5 Leadership). Theo cách lý giải của tác giả, người lãnh đạo có khả năng đưa doanh nghiệp phát triển vượt trội thường kết hợp giữa sự khiêm tốn cá nhân và ý chí nghề nghiệp mạnh mẽ. Họ không đặt bản thân ở vị trí trung tâm của thành công mà chú trọng xây dựng tổ chức, phát triển con người và duy trì những giá trị lâu dài.",

					"Điều này đem đến một góc nhìn khác về năng lực lãnh đạo. Một người đứng đầu doanh nghiệp không nhất thiết phải là người xuất hiện nhiều nhất hay có cá tính nổi bật nhất. Đôi khi, khả năng tạo dựng đội ngũ, đưa ra quyết định đúng đắn và kiên trì với mục tiêu chung mới là yếu tố tạo nên sự khác biệt."
				],

				// Hai ô nhận xét trong phần I
				callouts: [
					{
						title: "Thành công bắt đầu từ cách nhìn dài hạn",
						content:
							"Cuốn sách cho thấy kết quả vượt trội không chỉ đến từ những quyết định mang tính đột phá. Khả năng duy trì định hướng rõ ràng và kiên trì thực hiện trong thời gian dài mới là nền tảng quan trọng để doanh nghiệp phát triển bền vững."
					},
					{
						title: "Người lãnh đạo giỏi không nhất thiết phải là người nổi bật nhất",
						content:
							"Jim Collins nhấn mạnh vai trò của những nhà lãnh đạo biết đặt lợi ích lâu dài của tổ chức lên trên cái tôi cá nhân. Sự khiêm tốn kết hợp với quyết tâm mạnh mẽ giúp họ xây dựng một tập thể có khả năng tiếp tục phát triển ngay cả khi người lãnh đạo không còn trực tiếp điều hành."
					}
				]
			},

			{
				heading: "II. Những nguyên tắc đứng sau sự chuyển mình của doanh nghiệp",

				paragraphs: [
					"Một trong những tư tưởng nổi bật của Từ Tốt Đến Vĩ Đại là nguyên tắc First Who, Then What – Con người trước, chiến lược sau. Jim Collins cho rằng doanh nghiệp cần tập trung đưa đúng người vào đội ngũ, đặt họ vào đúng vị trí và xây dựng một tập thể có năng lực trước khi xác định đầy đủ hướng đi chiến lược.",

					"Cách tiếp cận này đặt con người ở vị trí trung tâm của quá trình phát triển tổ chức. Một chiến lược dù hấp dẫn đến đâu cũng khó đạt hiệu quả nếu đội ngũ thực hiện thiếu năng lực, không phù hợp với công việc hoặc không có sự đồng thuận. Ngược lại, khi có một tập thể phù hợp, doanh nghiệp sẽ có nền tảng tốt hơn để thích nghi với thay đổi và giải quyết những vấn đề phức tạp.",

					"Bên cạnh đó, tác giả giới thiệu mô hình Con nhím (The Hedgehog Concept), được xây dựng từ sự giao thoa của ba câu hỏi quan trọng: Doanh nghiệp có thể trở nên giỏi nhất thế giới trong lĩnh vực nào? Điều gì thúc đẩy hoạt động kinh doanh của doanh nghiệp? Và doanh nghiệp thực sự đam mê điều gì?",

					"Ba câu hỏi này giúp tổ chức xác định lĩnh vực mà mình có thể tạo ra lợi thế khác biệt thay vì cố gắng theo đuổi quá nhiều mục tiêu cùng lúc. Một doanh nghiệp không cần phải giỏi mọi thứ. Điều quan trọng là hiểu rõ năng lực cốt lõi, giá trị kinh tế và động lực phát triển của mình để tập trung nguồn lực một cách hợp lý.",

					"Một nguyên tắc khác là văn hóa kỷ luật (Culture of Discipline). Theo Jim Collins, khi doanh nghiệp có những con người phù hợp, họ cần được trao quyền chủ động nhưng đồng thời phải có trách nhiệm với công việc. Kỷ luật không chỉ là việc tuân thủ quy định mà còn là khả năng duy trì sự tập trung, nhất quán trong hành động và không dễ dàng bị cuốn theo những cơ hội không phù hợp.",

					"Cuốn sách cũng đề cập đến việc sử dụng công nghệ như một công cụ hỗ trợ phát triển. Công nghệ không tự động biến một doanh nghiệp tốt thành doanh nghiệp vĩ đại. Tuy nhiên, khi được ứng dụng đúng với định hướng và năng lực cốt lõi, nó có thể giúp tổ chức tăng tốc quá trình chuyển đổi và cải thiện hiệu quả hoạt động.",

					"Những nguyên tắc này có mối liên hệ chặt chẽ với nhau. Lãnh đạo phù hợp giúp xây dựng đội ngũ tốt; đội ngũ tốt tạo nền tảng cho việc xác định hướng đi; chiến lược rõ ràng giúp doanh nghiệp duy trì kỷ luật và sử dụng nguồn lực hiệu quả. Từ đó, sự phát triển không còn phụ thuộc vào một cá nhân hay một quyết định đơn lẻ mà trở thành kết quả của cả hệ thống."
				],

				// Khung câu dẫn biên tập
				quote: {
					content:
						"Doanh nghiệp vĩ đại không được tạo nên bởi một khoảnh khắc thành công, mà bởi những lựa chọn đúng đắn được duy trì qua thời gian.",
					source:
						"Câu dẫn do nhóm biên soạn cho bài review, không phải lời trích nguyên văn của Jim Collins."
				},

				// Đoạn văn sau khung câu dẫn
				paragraphsAfterQuote: [
					"Một điểm đáng suy nghĩ khi đọc cuốn sách là sự khác biệt giữa việc tăng trưởng nhanh và phát triển bền vững. Một doanh nghiệp có thể đạt được kết quả tích cực trong ngắn hạn nhờ một sản phẩm nổi bật hoặc một chiến dịch hiệu quả. Tuy nhiên, để duy trì vị thế trong nhiều năm, tổ chức cần có đội ngũ phù hợp, định hướng rõ ràng và khả năng vận hành nhất quán. Đây cũng là lý do những nguyên tắc trong sách có thể được tham khảo trong nhiều bối cảnh kinh doanh khác nhau."
				]
			},

			{
				heading: "III. Từ kiến thức quản trị đến khả năng áp dụng trong thực tế",

				paragraphs: [
					"Từ Tốt Đến Vĩ Đại phù hợp với những người quan tâm đến quản trị, kinh doanh và quá trình xây dựng tổ chức. Cuốn sách không phải một cẩm nang đưa ra công thức thành công có thể áp dụng giống nhau cho mọi doanh nghiệp. Thay vào đó, tác giả cung cấp một hệ thống nguyên tắc được rút ra từ nghiên cứu các trường hợp thực tế, giúp người đọc có cơ sở để suy nghĩ và đánh giá hoạt động của một tổ chức.",

					"Đối với sinh viên kinh tế và quản trị kinh doanh, nội dung về lãnh đạo cấp độ 5, mô hình Con nhím và văn hóa kỷ luật có thể giúp kết nối kiến thức lý thuyết với những vấn đề thực tế trong doanh nghiệp. Khi làm việc nhóm hoặc tham gia một dự án, người đọc cũng có thể liên hệ đến cách phân chia nhiệm vụ, lựa chọn thành viên, xác định mục tiêu chung và duy trì trách nhiệm trong quá trình thực hiện.",

					"Đối với những người đang đi làm, cuốn sách gợi mở cách nhìn nhận lại vai trò của bản thân trong một tập thể. Thay vì chỉ quan tâm đến kết quả trước mắt, mỗi cá nhân có thể suy nghĩ về cách phát triển năng lực, lựa chọn công việc phù hợp và đóng góp vào mục tiêu dài hạn của tổ chức.",

					"Tuy nhiên, đây là một cuốn sách có dung lượng tương đối lớn với nhiều nội dung nghiên cứu và ví dụ doanh nghiệp. Người đọc chưa có nền tảng về quản trị có thể gặp khó khăn khi tiếp cận một số thuật ngữ và cách phân tích. Vì vậy, nên đọc theo từng chủ đề, ghi chú những nguyên tắc quan trọng và thử liên hệ với những doanh nghiệp quen thuộc để hiểu rõ hơn.",

					"Cũng cần lưu ý rằng các doanh nghiệp được nghiên cứu trong sách thuộc một bối cảnh lịch sử và môi trường kinh doanh cụ thể. Những nguyên tắc của tác giả có thể mang lại nhiều gợi ý hữu ích, nhưng không nên xem chúng như công thức bảo đảm thành công cho mọi tổ chức. Việc áp dụng vẫn cần dựa trên quy mô, ngành nghề, nguồn lực và điều kiện thực tế của từng doanh nghiệp.",

					"Tác phẩm phù hợp với sinh viên kinh tế, quản trị kinh doanh muốn tìm hiểu các nguyên tắc quản trị, năng lực lãnh đạo, xây dựng đội ngũ và chiến lược phát triển tổ chức. Nhà quản lý và người điều hành doanh nghiệp có thể tham khảo cách xây dựng văn hóa kỷ luật, xác định năng lực cốt lõi và duy trì hiệu quả hoạt động dài hạn. Người khởi nghiệp có thể suy nghĩ về việc lựa chọn đúng cộng sự, xác định lĩnh vực kinh doanh phù hợp và tránh phân tán nguồn lực. Bên cạnh đó, người đi làm muốn phát triển sự nghiệp có thể nhìn nhận lại vai trò của cá nhân trong tập thể, tinh thần trách nhiệm và cách tạo ra giá trị lâu dài trong công việc."
				]
			}
		]
	},

	{
		// ==========================================
		// 1. THÔNG TIN CƠ BẢN CỦA SÁCH - TIẾP THỊ 6.0
		// ==========================================
		id: "tiep-thi-6-0",
		title: "Tiếp Thị 6.0 – Tương Lai Là Toàn Nhập",
		author: "Philip Kotler, Hermawan Kartajaya, Iwan Setiawan",
		category: "Kinh tế – Kinh doanh",
		image: "images/books/tiep-thi-6-0.jpg",
		color: "#6B4F7A",

		description:
			"Tiếp Thị 6.0 tập trung vào sự thay đổi của hoạt động tiếp thị trong bối cảnh công nghệ phát triển và hành vi người tiêu dùng ngày càng đa dạng. Cuốn sách phân tích cách doanh nghiệp kết hợp các kênh trực tuyến và ngoại tuyến, ứng dụng công nghệ để tạo ra trải nghiệm khách hàng liền mạch và xây dựng mối quan hệ với người tiêu dùng. Tác phẩm giúp người đọc hiểu rõ hơn về xu hướng marketing hiện đại và cách doanh nghiệp thích nghi với môi trường kinh doanh số.",

		// ==========================================
		// 2. THÔNG TIN ẤN BẢN THAM KHẢO
		// ==========================================
		year: 2023,
		publisher: "Nhà xuất bản Trẻ",
		tag: [
			"Marketing hiện đại",
			"Công nghệ và trải nghiệm khách hàng",
			"Tiếp thị nhập vai"
		],
		status: "active",

		// ==========================================
		// 3. THÔNG TIN ĐIỀU HƯỚNG
		// ==========================================
		navigation: {
			backButton: "Quay lại danh mục sách",
			backCategory: "Kinh tế – Kinh doanh",
			note: BACK_NOTE
		},

		// ==========================================
		// 4. NỘI DUNG REVIEW CHI TIẾT
		// ==========================================
		review: [
			{
				heading: "I. Khi ranh giới giữa thế giới thực và thế giới số dần thay đổi",

				paragraphs: [
					"Hoạt động tiếp thị đã trải qua nhiều thay đổi cùng với sự phát triển của công nghệ và hành vi người tiêu dùng. Nếu trước đây doanh nghiệp chủ yếu tiếp cận khách hàng thông qua quảng cáo truyền thống, cửa hàng vật lý và các phương tiện truyền thông đại chúng, thì ngày nay người tiêu dùng có thể tương tác với thương hiệu qua nhiều nền tảng và thiết bị khác nhau. Họ tìm kiếm thông tin trên mạng xã hội, xem đánh giá trực tuyến, mua hàng qua ứng dụng và tiếp tục trải nghiệm dịch vụ tại cửa hàng thực tế.",

					"Trong bối cảnh đó, Philip Kotler, Hermawan Kartajaya và Iwan Setiawan giới thiệu Tiếp Thị 6.0 – Tương Lai Là Toàn Nhập như một góc nhìn về giai đoạn phát triển tiếp theo của marketing. Cuốn sách tập trung vào khái niệm tiếp thị nhập vai (Immersive Marketing), trong đó công nghệ được sử dụng để kết nối thế giới vật lý và kỹ thuật số, tạo ra những trải nghiệm có tính tương tác và gần gũi hơn với người tiêu dùng.",

					"Điểm đáng chú ý của cách tiếp cận này là doanh nghiệp không chỉ quan tâm đến việc đưa thông tin sản phẩm đến khách hàng mà còn chú trọng đến cách khách hàng cảm nhận và tương tác với thương hiệu. Một trải nghiệm mua sắm có thể bắt đầu từ việc nhìn thấy sản phẩm trên mạng xã hội, tiếp tục bằng việc tìm hiểu thông tin trên website, sau đó kết thúc tại cửa hàng hoặc thông qua một giao dịch trực tuyến. Những điểm tiếp xúc này cần được kết nối để tạo nên một hành trình nhất quán.",

					"Cuốn sách cũng đề cập đến sự thay đổi trong cách con người tiếp nhận thông tin và trải nghiệm thương hiệu. Người tiêu dùng ngày nay không còn chỉ đóng vai trò tiếp nhận quảng cáo một chiều. Họ có thể phản hồi, chia sẻ nội dung, tham gia vào cộng đồng và trực tiếp tạo ra những cuộc trò chuyện xoay quanh sản phẩm. Vì vậy, doanh nghiệp cần chuyển từ tư duy truyền thông đơn thuần sang xây dựng những trải nghiệm có khả năng thu hút và duy trì sự tham gia của khách hàng.",

					"Một khía cạnh quan trọng khác là vai trò của thế hệ người tiêu dùng trẻ, đặc biệt là những người đã quen với môi trường kỹ thuật số. Họ thường xuyên sử dụng điện thoại thông minh, mạng xã hội và các nền tảng trực tuyến để tìm kiếm thông tin, giải trí và mua sắm. Điều này khiến doanh nghiệp phải quan tâm nhiều hơn đến tính tương tác, sự thuận tiện và khả năng cá nhân hóa trải nghiệm."
				],

				// Hai ô nhận xét trong phần I
				callouts: [
					{
						title: "Marketing chuyển từ truyền tải thông điệp sang tạo trải nghiệm",
						content:
							"Thay vì chỉ tập trung vào việc khách hàng nhìn thấy quảng cáo, doanh nghiệp cần quan tâm đến những gì khách hàng thực sự trải nghiệm khi tiếp xúc với thương hiệu. Sự tương tác và cảm xúc trở thành những yếu tố quan trọng trong việc xây dựng mối quan hệ với người tiêu dùng."
					},
					{
						title: "Thế giới thực và kỹ thuật số cần được kết nối",
						content:
							"Khách hàng có thể bắt đầu hành trình mua sắm trên nền tảng trực tuyến và tiếp tục trải nghiệm tại cửa hàng. Việc kết nối các điểm tiếp xúc giúp doanh nghiệp tạo ra một hành trình thuận tiện, liền mạch và nhất quán hơn."
					}
				]
			},

			{
				heading: "II. Công nghệ, trải nghiệm nhập vai và tương lai của hoạt động tiếp thị",

				paragraphs: [
					"Một trong những nội dung trọng tâm của Tiếp Thị 6.0 là vai trò của công nghệ trong việc thay đổi cách doanh nghiệp tương tác với khách hàng. Các công nghệ như trí tuệ nhân tạo (AI), thực tế tăng cường (AR), thực tế ảo (VR) và Internet vạn vật (IoT) đang mở ra nhiều phương thức tiếp cận mới. Thay vì chỉ cung cấp thông tin về sản phẩm, doanh nghiệp có thể tạo ra những trải nghiệm giúp người tiêu dùng trực tiếp khám phá, tương tác và hình dung rõ hơn về giá trị mà thương hiệu mang lại.",

					"Thực tế tăng cường (AR) cho phép kết hợp các yếu tố kỹ thuật số với môi trường thực tế. Chẳng hạn, khách hàng có thể sử dụng điện thoại để hình dung một món đồ nội thất sẽ trông như thế nào khi được đặt trong căn phòng của mình, hoặc thử một sản phẩm thông qua hình ảnh trên màn hình. Cách tiếp cận này giúp người tiêu dùng có thêm thông tin trước khi đưa ra quyết định mua hàng, đồng thời làm cho quá trình tìm hiểu sản phẩm trở nên trực quan và thú vị hơn.",

					"Trong khi đó, thực tế ảo (VR) tạo ra một môi trường kỹ thuật số mô phỏng, nơi người dùng có thể tham gia và khám phá không gian thông qua các thiết bị phù hợp. Doanh nghiệp có thể ứng dụng công nghệ này để xây dựng trải nghiệm tham quan, giới thiệu sản phẩm hoặc mô phỏng một không gian thương hiệu. Người tiêu dùng không chỉ quan sát nội dung mà còn có cảm giác đang trực tiếp tham gia vào trải nghiệm đó.",

					"Trí tuệ nhân tạo (AI) cũng đóng vai trò quan trọng trong việc phân tích dữ liệu và cá nhân hóa hoạt động tiếp thị. Thông qua dữ liệu về hành vi, sở thích và nhu cầu của khách hàng, doanh nghiệp có thể đề xuất sản phẩm, điều chỉnh nội dung truyền thông và cải thiện dịch vụ. Tuy nhiên, việc sử dụng dữ liệu cần đi kèm với sự minh bạch và tôn trọng quyền riêng tư. Cá nhân hóa chỉ thực sự có ý nghĩa khi khách hàng cảm thấy được thấu hiểu thay vì bị theo dõi hoặc làm phiền.",

					"Bên cạnh các công nghệ riêng lẻ, cuốn sách nhấn mạnh tầm quan trọng của việc kết nối nhiều kênh tiếp xúc trong hành trình khách hàng. Một người có thể nhìn thấy sản phẩm trên TikTok, truy cập website để tìm hiểu thêm, đọc đánh giá từ những người mua trước rồi đến cửa hàng để trải nghiệm trực tiếp. Nếu thông tin và chất lượng dịch vụ giữa các kênh không thống nhất, khách hàng có thể cảm thấy bất tiện và mất niềm tin vào thương hiệu.",

					"Từ đó, doanh nghiệp cần xây dựng trải nghiệm đa kênh có sự liên kết thay vì xem từng nền tảng là một hoạt động riêng biệt. Mỗi điểm tiếp xúc cần hỗ trợ cho những điểm còn lại, giúp khách hàng dễ dàng chuyển đổi giữa môi trường trực tuyến và ngoại tuyến. Điều này không chỉ tạo sự thuận tiện trong quá trình mua sắm mà còn giúp thương hiệu duy trì hình ảnh nhất quán trong tâm trí người tiêu dùng.",

					"Tuy nhiên, việc ứng dụng công nghệ không nên chỉ xuất phát từ mong muốn chạy theo xu hướng. Một công cụ hiện đại sẽ không mang lại nhiều giá trị nếu không giải quyết được nhu cầu thực tế của khách hàng. Doanh nghiệp cần xác định rõ vấn đề muốn cải thiện, đối tượng sử dụng và khả năng triển khai trước khi lựa chọn công nghệ phù hợp. Điều quan trọng không phải là sử dụng càng nhiều công nghệ càng tốt, mà là tạo ra trải nghiệm thực sự hữu ích."
				],

				// Khung câu dẫn biên tập
				quote: {
					content:
						"Tương lai của marketing không chỉ nằm ở việc thương hiệu xuất hiện ở đâu, mà còn ở cách khách hàng được trải nghiệm và tương tác với thương hiệu.",
					source:
						"Câu dẫn do nhóm biên soạn cho bài review, không phải lời trích nguyên văn của Philip Kotler, Hermawan Kartajaya và Iwan Setiawan."
				},

				// Đoạn văn sau khung câu dẫn
				paragraphsAfterQuote: [
					"Đọc cuốn sách, người làm marketing có thể nhận ra rằng công nghệ không phải mục tiêu cuối cùng của hoạt động tiếp thị. Điều quan trọng hơn là hiểu khách hàng, xác định những điểm chạm phù hợp và lựa chọn công nghệ có khả năng cải thiện hành trình trải nghiệm. Khi được sử dụng đúng cách, các công cụ kỹ thuật số có thể giúp doanh nghiệp tạo ra sự kết nối sâu sắc hơn thay vì chỉ gia tăng số lượng quảng cáo hay nội dung xuất hiện trên các nền tảng."
				]
			},

			{
				heading: "III. Đọc Tiếp Thị 6.0 để hiểu cách marketing đang thay đổi",

				paragraphs: [
					"Tiếp Thị 6.0 phù hợp với những độc giả quan tâm đến marketing hiện đại, công nghệ và sự thay đổi trong hành vi người tiêu dùng. Cuốn sách cung cấp góc nhìn về cách doanh nghiệp có thể kết hợp thế giới thực với môi trường kỹ thuật số để xây dựng trải nghiệm thương hiệu. Thay vì chỉ tập trung vào quảng cáo hay bán hàng, tác phẩm mở rộng cách nhìn về hoạt động tiếp thị thông qua sự tương tác, kết nối và tham gia của khách hàng.",

					"Đối với sinh viên marketing và truyền thông, nội dung trong sách giúp mở rộng kiến thức về những xu hướng đang ảnh hưởng đến ngành. Các khái niệm như tiếp thị nhập vai, trải nghiệm đa kênh, cá nhân hóa và ứng dụng công nghệ có thể được liên hệ với những hoạt động quen thuộc như xây dựng nội dung trên mạng xã hội, phát triển website, tổ chức chiến dịch truyền thông và chăm sóc khách hàng. Qua đó, người đọc có thêm cơ sở để suy nghĩ về cách tạo ra trải nghiệm nhất quán trong toàn bộ hành trình khách hàng.",

					"Đối với những người đang làm marketing, cuốn sách gợi mở cách đánh giá lại phương thức tiếp cận khách hàng của doanh nghiệp. Thay vì chỉ quan tâm đến lượt xem, lượt tương tác hay số lượng đơn hàng, người làm marketing có thể chú ý nhiều hơn đến chất lượng trải nghiệm tại từng điểm tiếp xúc. Việc kết hợp dữ liệu, công nghệ và nội dung phù hợp có thể giúp thương hiệu hiểu rõ hơn nhu cầu của khách hàng và xây dựng mối quan hệ lâu dài.",

					"Những người điều hành doanh nghiệp và quản lý thương hiệu cũng có thể tìm thấy nhiều gợi ý trong tác phẩm. Việc kết nối cửa hàng vật lý với các nền tảng trực tuyến, ứng dụng công nghệ vào hoạt động kinh doanh và cải thiện trải nghiệm khách hàng là những vấn đề có thể được tham khảo trong quá trình xây dựng chiến lược. Tuy nhiên, doanh nghiệp cần cân nhắc nguồn lực, đặc điểm ngành nghề và mức độ sẵn sàng của khách hàng trước khi triển khai các giải pháp mới.",

					"Một điểm cần lưu ý là cuốn sách đề cập đến nhiều khái niệm công nghệ và xu hướng tiếp thị có thể còn khá mới đối với người đọc chưa có nền tảng chuyên môn. Một số nội dung mang tính định hướng tương lai nên cần được đặt trong bối cảnh thực tế của từng thị trường. Công nghệ cũng thay đổi nhanh chóng, vì vậy người đọc nên tiếp tục cập nhật những ứng dụng mới và không xem mọi dự đoán trong sách là giải pháp có thể áp dụng ngay lập tức.",

					"Tác phẩm phù hợp với sinh viên marketing và truyền thông muốn tìm hiểu về xu hướng phát triển của ngành, trải nghiệm khách hàng và ứng dụng công nghệ trong tiếp thị. Người đang làm marketing có thể tham khảo các phương thức kết nối điểm chạm, cá nhân hóa nội dung và xây dựng trải nghiệm thương hiệu. Chủ doanh nghiệp và người quản lý thương hiệu có thể suy nghĩ về cách kết hợp hoạt động trực tuyến với cửa hàng thực tế để cải thiện hành trình mua sắm. Bên cạnh đó, những độc giả quan tâm đến công nghệ và kinh doanh cũng có thể tìm thấy góc nhìn về cách những thay đổi kỹ thuật số đang tác động đến hoạt động của doanh nghiệp."
				]
			}
		]
	}
];


/* =========================================
	 4. GET BOOK BY ID
	 Tìm sách theo ID
========================================= */

function getBookById(id) {
	return BOOKS.find(book => book.id === id) || null;
}


/* =========================================
	 5. HÀM HỖ TRỢ (CÓ THỂ DÙNG CHO WEBSITE)
========================================= */

// Lấy sách theo thể loại (so khớp với `name` trong CATEGORIES)
function getBooksByCategory(category) {
	return BOOKS.filter(book => book.category === category);
}

// Tìm kiếm theo tên sách hoặc tác giả
function searchBooks(keyword) {
	const normalizedKeyword = keyword
		.toLowerCase()
		.trim();

	return BOOKS.filter(book =>
		book.title.toLowerCase().includes(normalizedKeyword) ||
		book.author.toLowerCase().includes(normalizedKeyword)
	);
}

// Lấy sách đang hoạt động
function getActiveBooks() {
	return BOOKS.filter(book => book.status === "active");
}

// Lấy sách có bài review (review là mảng các phần nội dung)
function getReviewedBooks() {
	return BOOKS.filter(
		book => Array.isArray(book.review) && book.review.length > 0
	);
}