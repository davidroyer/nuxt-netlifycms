// eslint-disable-next-line import/no-webpack-loader-syntax
// import styles from '!css-loader!sass-loader!../main.scss'
const { CMS } = window

CMS.registerPreviewStyle('example.css')
// CMS.registerPreviewStyle(styles.toString(), { raw: true })

const TeamsPreview = createClass({
  // For list fields, the widgetFor function returns an array of objects
  // that you can map over in your template. If our field is a list of
  // authors containing two entries, with fields `name` and `description`,
  // the return value of `widgetsFor` would look like this:
  //
  // [{
  //   data: { name: 'Mathias', description: 'Co-Founder'},
  //   widgets: { name: (<WidgetComponent>), description: (WidgetComponent>)}
  // },
  // {
  //   data: { name: 'Chris', description: 'Co-Founder'},
  //   widgets: { name: (<WidgetComponent>), description: (WidgetComponent>)}
  // }]
  //
  // Templating would look something like this:

  render() {
    return h(
      'div',
      {},

      // This is a static header that would only be rendered once for the entire list
      h('h1', {}, 'Teams'),

      // Here we provide a simple mapping function that will be applied to each
      // object in the array of authors
      this.props.widgetsFor('teams').map(function(team, index) {
        return h(
          'div',
          { key: index },
          h('hr', {}),
          h('strong', {}, team.getIn(['data', 'name'])),
          team.getIn(['widgets', 'description'])
        )
      })
    )
  }
})

CMS.registerPreviewTemplate('teams', TeamsPreview)
