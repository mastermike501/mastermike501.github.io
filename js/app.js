(function() {

	var app = angular.module('HomepageApp', ['ui.bootstrap', 'ngTouch']);

	var hpcInjectables = ['$sce', '$uibModal'];

	function HomepageController($sce, $uibModal) {

		var cntrl = this;

		cntrl.modal = $uibModal;
		cntrl.config = {
			name: 'Michael Kong',
			currentStatus: [
				{
					normal: 'Student @ the',
					link: 'University of Wollongong',
					url: 'http://www.uow.edu.au/index.html'
				},
				{
					normal: 'Software Engineering Intern @',
					link: 'Intel Corporation',
					url: 'http://www.intel.my/content/www/my/en/homepage.html'
				}
			]
		};
		cntrl.locations = {
			wollongong: $sce.trustAsResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d421529.8976223299!2d150.92727889999998!3d-34.370774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b131ad136a8c94b%3A0x4017d681632a8c0!2sWollongong+NSW!5e0!3m2!1sen!2sau!4v1442755899619'),
			penang: $sce.trustAsResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254234.3432732171!2d100.22279070712591!3d5.353988040169099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304a9403095390dd%3A0x29c305a5f38f633f!2sPenang%2C+Malaysia!5e0!3m2!1sen!2sau!4v1448067109871')
		};
		cntrl.navTabs = [
			{
				name: 'Skills',
				icon: 'glyphicon-wrench'
			},
			{
				name: 'Education',
				icon: 'glyphicon-education'
			},
			{
				name: 'Achievements',
				icon: 'glyphicon-certificate'
			},
			{
				name: 'Interests',
				icon: 'glyphicon-sunglasses'
			},
			{
				name: 'About',
				icon: 'glyphicon-info-sign'
			}
		];

		cntrl.openModal = function(tab) {
			cntrl.modal.open({
				templateUrl: 'templates/modal_template.html',
				size: 'lg',
				windowClass: 'black-text',
				controller: 'ModalController',
				controllerAs: 'mdlCntrl',
				resolve: {
					tab: function () {
						return tab;
					}
				}
			});
		};
	}

	app.controller('HomepageController', hpcInjectables.concat([HomepageController]));

	var modalInjectables = ['$sce', '$uibModalInstance', 'tab'];

	function ModalController($sce, $uibModalInstance, tab) {

		var cntrl = this;
		var modal = $uibModalInstance;

		cntrl.tab = tab;

		cntrl.getBody = function() {
			return 'templates/' + cntrl.tab.name.toLowerCase() + '_modal.html';
		};

		cntrl.close = function() {
			modal.dismiss('');
		};

	}

	app.controller('ModalController', modalInjectables.concat([ModalController]));

	var smcInjectables = ['$sce'];

	function SkillsModalController ($sce) {

		var cntrl = this;

		cntrl.skillLevels = [
			{
				name: 'Beginner',
				icon: 'glyphicon-pawn'
			},
			{
				name: 'Intermediate',
				icon: 'glyphicon-tower'
			},
			{
				name: 'Advanced',
				icon: 'glyphicon-king'
			}
		];
		cntrl.skills = {
			beginner: ['C', 'Database Performance Tuning', 'Lua', 'Microsoft Active Directory Services'],
			intermediate: ['AngularJS', 'Bootstrap', 'HTML5/CSS3', 'jQuery', 'MySQL', 'Oracle', 'PHP', 'SQL'],
			advanced: ['C++', 'Java', 'HTML/CSS', 'JavaScript']
		};
		cntrl.workExperience = [
			{
				title: 'Software Engineering Intern',
				company: {
					name: 'Intel Corporation',
					location: 'Penang, Malaysia',
					url: 'http://www.intel.my/content/www/my/en/homepage.html'
				},
				duration: $sce.trustAsHtml('December 2015 &#8212; Present')
			},
			{
				title: 'Systems Developer',
				company: {
					name: 'NIFTY Concepts',
					location: 'Wollongong, Australia',
					url: 'http://www.thatsprettynifty.com/'
				},
				duration: $sce.trustAsHtml('September 2015 &#8212; November 2015')
			},
			{
				title: 'Game Programmer',
				company: {
					name: 'Berrmogul Games',
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

	}

	app.controller('SkillsModalController', smcInjectables.concat([SkillsModalController]));

	var emcInjectables = [];

	function EducationModalController () {

		var cntrl = this;

		cntrl.isCollapseClosed = [];

		cntrl.academicEducation = [
			{
				name: 'University of Wollongong',
				certificationName: 'Bachelor of Computer Science (Dean\'s Scholar)',
				duration: '2014-2016',
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
								mark: 'Undertaking'
							}
						]
					}
				]
			},
			{
				name: 'INTI International College Penang',
				certificationName: 'Diploma in Information and Communications Technology (Distinction)',
				duration: '2011-2013',
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
			}
		];

		cntrl.musicalEducation = [
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

		cntrl.init = function() {
			for (var i = 0; i < cntrl.academicEducation.length; i++) {
				cntrl.isCollapseClosed.push(true);
			}
		};

		cntrl.init();
	}

	app.controller('EducationModalController', emcInjectables.concat([EducationModalController]));

	var achmcInjectables = [];

	function AchievementsModalController() {

		var cntrl = this;

		cntrl.awards = [
			{
				title: 'Dean\'s Merit List prize',
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

	}

	app.controller('AchievementsModalController', achmcInjectables.concat([AchievementsModalController]));

})();
