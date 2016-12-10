'use strict';

/**
 * Module dependencies
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Course = mongoose.model('Course'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a course
 */
exports.create = function (req, res) {
  var course = new Course(req.body);
  course.user = req.user;
  course.coordinator = req.body.coordinator[0];
  course.academicyear = 2016;

  course.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    }
    res.json(course);
  });
};

/**
 * Show the current course
 */
exports.read = function (req, res) {
  // convert mongoose document to JSON
  var course = req.course ? req.course.toJSON() : {};
  res.json(course);
};

/**
 * Update a course
 */
exports.update = function (req, res) {
  var course = req.course;

  course.code = req.body.code;
  course.name = req.body.name;
  course.coordinator = req.body.coordinator[0];
  course.description = req.body.description;
  course.activities = req.body.activities;

  course.save(function (err) {
    if (err) {
      return res.status(422).send({
        message: errorHandler.getErrorMessage(err)
      });
    }
    res.json(course);
  });
};

/**
 * List of courses
 */
exports.list = function (req, res) {
  if (!req.query.filter) {
    return res.status(422).send({
      message: 'Missing filter.'
    });
  }

  switch (req.query.filter) {
    // Load all the courses
    case 'all':
      Course.find({ 'academicyear': req.session.academicyear }).exec(function (err, courses) {
        if (err) {
          return res.status(400).send({
            message: errorHandler.getErrorMessage(err)
          });
        }
        res.json(courses);
      });
      break;

    case 'teacher':
      Course.find({ 'academicyear': req.session.academicyear })
      .populate('activities', 'teachers')
      .exec(function (err, courses) {
        if (err) {
          return res.status(400).send({
            message: errorHandler.getErrorMessage(err)
          });
        }
        var teacherCourses = [];
        courses.forEach(function (course) {
          if (course.coordinator.equals(req.user.id)) {
            teacherCourses.push(course);
          } else {
            // Check if teacher not in one of the activities
            course.activities.forEach(function (activity) {
              if (activity.teachers.some(function (element) { return element.equals(req.user.id); })) {
                teacherCourses.push(course);
              }
            });
          }
        });
        res.json(teacherCourses);
      });
      break;

    default:
      res.json([]);
  }
};

/**
 * Course middleware
 */
exports.courseByCode = function (req, res, next, code) {
  Course.findOne({ 'code': code }, 'code name coordinator description activities')
  .populate('coordinator', 'displayName')
  .populate('activities', 'code name')
  .exec(function (err, course) {
    if (err) {
      return next(err);
    }
    if (!course) {
      return res.status(404).send({
        message: 'No course with that identifier has been found.'
      });
    }
    req.course = course;
    next();
  });
};
