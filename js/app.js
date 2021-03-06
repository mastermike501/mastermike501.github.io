(function() {

	$(document).ready(function(){
    	$('.parallax').parallax();
		// $('.modal-trigger').leanModal();
    });

	var app = angular.module('HomepageApp', ['ngTouch']);

	HomepageController.$inject = ['$scope', '$sce'];
	function HomepageController($scope, $sce) {

		var scope = $scope;

		scope.config = {
			name: 'Michael Kong',
			currentStatus: [
				{
					normal: 'Software Engineer @ ',
					link: 'Intel Corporation',
					url: 'http://www.intel.my/content/www/my/en/homepage.html'
				},
				{
					normal: 'Postgraduate Student @ ',
					link: 'Universiti Sains Malaysia',
					url: 'http://www.cs.usm.my/'
				}
			]
		};
		scope.locations = {
			wollongong: $sce.trustAsResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d421529.8976223299!2d150.92727889999998!3d-34.370774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b131ad136a8c94b%3A0x4017d681632a8c0!2sWollongong+NSW!5e0!3m2!1sen!2sau!4v1442755899619'),
			penang: $sce.trustAsResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254234.3432732171!2d100.22279070712591!3d5.353988040169099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304a9403095390dd%3A0x29c305a5f38f633f!2sPenang%2C+Malaysia!5e0!3m2!1sen!2sau!4v1448067109871')
		};
		scope.socialLinks = [
			{
				link: $sce.trustAsResourceUrl('https://www.linkedin.com/in/michaelymkong'),
				text: 'j'
			},
			{
				link: $sce.trustAsResourceUrl('https://instagram.com/therealpianoguy'),
				text: 'x'
			},
			{
				link: $sce.trustAsResourceUrl('https://github.com/mastermike501/'),
				text: 'Q'
			}
		];
		scope.parallaxImages = {
			penangHillRestaurant: {
				link: $sce.trustAsResourceUrl('img/image1.jpg'),
				alt: 'Penang Hill Restaurant'
			},
			penangHillPanorama: {
				link: $sce.trustAsResourceUrl('img/image2.jpg'),
				alt: 'Penang Hill Panorama'
			},
			wollongongHarbour: {
				link: $sce.trustAsResourceUrl('img/image3.jpg'),
				alt: 'Wollongong Harbour'
			},
			wollongongBeach: {
				link: $sce.trustAsResourceUrl('img/image4.jpg'),
				alt: 'Wollongong Beach'
			}
		};
		scope.skillLevels = [
			{
				name: 'Beginner',
				skills: ['C', 'R', 'Lua', 'Perl', 'Laravel', 'Python', 'Machine Learning', 'Image Processing', 'Database Performance Tuning', 'Microsoft Active Directory Services']
			},
			{
				name: 'Intermediate',
				skills: ['Angular 2', 'TypeScript', 'jQuery', 'MySQL', 'Oracle', 'React', 'Node', 'PHP', 'SQL']
			},
			{
				name: 'Advanced',
				skills: ['C++', 'Java', 'JavaScript', 'HTML5/CSS3', 'AngularJS', 'Bootstrap']
			}
		];
		scope.awards = [
			{
				title: 'Dean\'s Merit Award',
				awarder: 'Faculty of Engineering and Information Sciences, University of Wollongong',
				year: 'June 2016'
			},
			{
				title: 'Martin Dawson Prize for Software Engineering Practices and Principles',
				awarder: 'TeleCommunications Systems Inc',
				year: 'May 2016'
			},
			{
				title: 'Outstanding Achievement in Database Performance Tuning',
				awarder: 'University of Wollongong',
				year: 'May 2016'
			},
			{
				title: 'Dean\'s Merit Award',
				awarder: 'Faculty of Engineering and Information Sciences, University of Wollongong',
				year: 'April 2015'
			},
			{
				title: 'itree Prize for Java Programming',
				awarder: 'itree',
				year: 'April 2015'
			},
			{
				title: 'Undergraduate Excellence Scholarship',
				awarder: 'University of Wollongong',
				year: 'February 2014'
			},
			{
				title: 'Dean\'s Scholar',
				awarder: 'University of Wollongong',
				year: 'February 2014'
			},
			{
				title: 'International Academic Merit Scholarship',
				awarder: 'Faculty of Engineering and Information Sciences, University of Wollongong',
				year: 'February 2014'
			}
		];
		scope.workExperience = [
			{
				title: 'Software Engineer',
				company: {
					name: 'Intel Corporation',
					location: 'Penang, Malaysia',
					url: 'http://www.intel.my/content/www/my/en/homepage.html'
				},
				duration: $sce.trustAsHtml('July 2017 &#8212; Present')
			},
			{
				title: 'Software Engineering Graduate Trainee',
				company: {
					name: 'Intel Corporation',
					location: 'Penang, Malaysia',
					url: 'http://www.intel.my/content/www/my/en/homepage.html'
				},
				duration: $sce.trustAsHtml('June 2016 &#8212; July 2017')
			},
			{
				title: 'Software Engineering Intern',
				company: {
					name: 'Intel Corporation',
					location: 'Penang, Malaysia',
					url: 'http://www.intel.my/content/www/my/en/homepage.html'
				},
				duration: $sce.trustAsHtml('December 2015 &#8212; February 2016')
			},
			{
				title: 'Game Programmer',
				company: {
					name: 'Beermogul Games',
					location: 'Wollongong, Australia',
					url: 'http://www.beermogul.com/'
				},
				duration: $sce.trustAsHtml('August 2014 &#8212; April 2015')
			},
			{
				title: 'IT Intern',
				company: {
					name: 'Priority Resources Sdn. Bhd.',
					location: 'Penang, Malaysia',
					url: 'http://www.presources.com.my/home.html'
				},
				duration: $sce.trustAsHtml('January 2013 &#8212; March 2013')
			}
		];
		scope.academicEducation = [
			{
				name: 'Universiti Sains Malaysia',
				certificationName: 'Master of Science (Computer Science)',
				duration: '2016 - 2017',
				field: 'Information and Knowledge Engineering',
				sessions: [
					{
						period: 'September 2016',
						subjects: [
							{
								name: 'Advanced Knowledge Management',
								mark: 'B'
							},
							{
								name: 'Advanced Distributed Systems Concepts and Design',
								mark: 'A-'
							},
							{
								name: 'Research Methodology & Empirical Methods in Computer Science',
								mark: 'A-'
							}
						]
					},
					{
						period: 'February 2017',
						subjects: [
							{
								name: 'Advanced Algorithms and Complexity',
								mark: 'A-'
							}
						]
					},
					{
						period: 'September 2017',
						subjects: [
							{
								name: 'Evolutionary Computing',
								mark: 'Undertaking'
							},
							{
								name: 'Dissertation',
								mark: 'Undertaking'
							}
						]
					}
				]
			},
			{
				name: 'University of Wollongong',
				certificationName: 'Bachelor of Computer Science (Dean\'s Scholar)',
				duration: '2014 - 2016',
				field: 'Software Engineering',
				sessions: [
					{
						period: 'Autumn 2014',
						wam: '89.5',
						subjects: [
							{
								name: 'Applied Programming',
								mark: 'High Distinction'
							},
							{
								name: 'Web Technologies',
								mark: 'High Distinction'
							},
							{
								name: 'Music Skills',
								mark: 'High Distinction'
							},
							{
								name: 'Introduction to Management for Professionals A',
								mark: 'Distinction'
							}
						]
					},
					{
						period: 'Spring 2014',
						wam: '87.625',
						subjects: [
							{
								name: 'Algorithms and Data Structures',
								mark: 'Distinction'
							},
							{
								name: 'Object and Generic Programming in C++',
								mark: 'High Distinction'
							},
							{
								name: 'Software Development Methods and Tools',
								mark: 'Distinction'
							},
							{
								name: 'Java Programming and Applications',
								mark: 'High Distinction'
							}
						]
					},
					{
						period: 'Autumn 2015',
						wam: '86.17',
						subjects: [
							{
								name: 'Systems Development',
								mark: 'High Distinction'
							},
							{
								name: 'Database Systems',
								mark: 'Distinction'
							},
							{
								name: 'Software Process Management',
								mark: 'High Distinction'
							},
							{
								name: 'Software Engineering Practices and Principles',
								mark: 'Distinction'
							}
						]
					},
					{
						period: 'Spring 2015',
						wam: '87.36',
						subjects: [
							{
								name: 'Database Performance Tuning',
								mark: 'High Distinction'
							},
							{
								name: 'Game Engine Fundamentals',
								mark: 'High Distinction'
							},
							{
								name: 'Project (Spans two sessions)',
								mark: 'Distinction'
							}
						]
					},
					{
						period: 'Autumn 2016',
						wam: '86.00',
						subjects: [
							{
								name: 'Project (Spans two sessions)',
								mark: 'Distinction'
							}
						]
					}
				]
			},
			{
				name: 'INTI International College Penang',
				certificationName: 'Diploma in Information and Communications Technology (Distinction)',
				duration: '2011 - 2013',
				field: 'Information and Communications Technology',
				sessions: [
					{
						period: 'August 2011',
						subjects: [
							{
								name: 'Principles of Information Technology',
								mark: 'A-'
							},
							{
								name: 'Programming Logic Formulation',
								mark: 'A'
							},
							{
								name: 'Fundamentals of Mathematics',
								mark: 'A'
							}
						]
					},
					{
						period: 'April 2012',
						subjects: [
							{
								name: 'Writing Skills',
								mark: 'A'
							},
							{
								name: 'Database Management',
								mark: 'A-'
							},
							{
								name: 'Discrete Mathematics',
								mark: 'A'
							},
							{
								name: 'Introduction to Internet Technologies',
								mark: 'A'
							}
						]
					},
					{
						period: 'August 2012',
						subjects: [
							{
								name: 'Structured Programming',
								mark: 'A'
							},
							{
								name: 'Fundamentals of Networking',
								mark: 'A'
							},
							{
								name: 'System Analysis and Design',
								mark: 'A'
							},
							{
								name: 'Quantitative Methods',
								mark: 'A'
							}
						]
					},
					{
						period: 'April 2013',
						subjects: [
							{
								name: 'Introduction to Human Computer Interaction',
								mark: 'A'
							},
							{
								name: 'Object Oriented Programming',
								mark: 'A+'
							},
							{
								name: 'Computer Organization',
								mark: 'A-'
							},
							{
								name: 'Network Design, Testing and Implementation',
								mark: 'A'
							},
							{
								name: 'Interactive Multimedia',
								mark: 'A'
							}
						]
					},
					{
						period: 'August 2013',
						subjects: [
							{
								name: 'Capstone Project',
								mark: 'A+'
							},
							{
								name: 'Introduction to Data Structure',
								mark: 'A'
							},
							{
								name: 'Fundamentals of Trustworthy Computing',
								mark: 'A+'
							},
							{
								name: 'Server Management',
								mark: 'A+'
							},
							{
								name: 'Entrepreneurship Skills',
								mark: 'A'
							}
						]
					}
				]
			},
		];

		scope.openAboutMeModal = function() {
			$('#aboutMeModal').openModal();
		};

		scope.openAboutWebsiteModal = function() {
			$('#aboutWebsiteModal').openModal();
		};

		scope.openEducationModal = function(index) {
			scope.educationModel = scope.academicEducation[index];
			$('#educationModal').openModal();
		};

		scope.openWorkExperienceModal = function() {
			$('#workExperienceModal').openModal();
		};

		scope.openAchievementsModal = function() {
			$('#achievementsModal').openModal();
		};

		scope.openInterestsModal = function() {
			$('#interestsModal').openModal();
		};
	}

	app.controller('HomepageController', HomepageController);

	// EducationModalController.$inject = [];
	function EducationModalController () {

		var scope = this;

		scope.isCollapseClosed = [];

		scope.musicalEducation = [
			{
				board: 'Trinity College London',
				grade: 'Licentiate of the Trinity College of London (LTCL)',
				field: 'Piano'
			},
			{
				board: 'Yamaha Music Foundation',
				grade: 'Grade 5 (Teacher\'s Grade)',
				field: 'Piano'
			},
			{
				board: 'Trinity College London',
				grade: 'Advanced Certificate',
				field: 'Cello'
			}
		];

		scope.init = function() {
			for (var i = 0; i < scope.academicEducation.length; i++) {
				scope.isCollapseClosed.push(true);
			}
		};

		scope.init();
	}

	app.controller('EducationModalController', EducationModalController);

})();
